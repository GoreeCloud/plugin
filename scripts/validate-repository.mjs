import { access, readFile } from "node:fs/promises";

const requiredRootFiles = [
  "README.md",
  "PROJECT-SPECIFICATIONS.md",
  "PROJECT-RECORD.md",
  "FEATURES.md",
  "IMPLEMENTED-FEATURES.md",
  "PLANNED-FEATURES.md",
  "CHANGELOGS.md",
  "BENEFITS.md",
  "COMPETITIVE-OBJECTIVES.md",
  "BRANDING.md",
  "USER-MANUAL.md",
  "SECURITY.md",
  ".gitignore",
  ".editorconfig",
  "goreecloud.platform.yaml",
  "LICENSE",
];

for (const file of requiredRootFiles) {
  await access(file);
  const content = await readFile(file, "utf8");
  if (!content.trim()) throw new Error(`${file} is empty`);
}

const deprecatedRootFiles = ["SPECIFICATIONS.md"];
for (const file of deprecatedRootFiles) {
  try {
    await access(file);
    throw new Error(`${file} is deprecated; consolidate project authority into PROJECT-SPECIFICATIONS.md and PROJECT-RECORD.md`);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

const readme = await readFile("README.md", "utf8");
for (const requiredLink of ["PROJECT-SPECIFICATIONS.md", "PROJECT-RECORD.md", "IMPLEMENTED-FEATURES.md", "PLANNED-FEATURES.md", "CHANGELOGS.md"]) {
  if (!readme.includes(requiredLink)) throw new Error(`README.md must reference ${requiredLink}`);
}

const projectSpec = await readFile("PROJECT-SPECIFICATIONS.md", "utf8");
if (projectSpec.includes("canonical GoreeCloud Drive project specification")) {
  throw new Error("PROJECT-SPECIFICATIONS.md must not declare Google Drive as current project-specification authority");
}

const manifest = JSON.parse(await readFile("goreecloud.platform.yaml", "utf8"));
const requiredManifestKeys = [
  "schema_version", "component", "lifecycle", "version", "supported_platforms", "api",
  "platform_systems", "health", "continuity", "external_dependencies", "compatibility",
  "evidence", "conformance"
];
for (const key of requiredManifestKeys) {
  if (!(key in manifest)) throw new Error(`goreecloud.platform.yaml missing ${key}`);
}
if (manifest.schema_version !== "0.2") throw new Error("Platform Contract schema must be 0.2");
if (manifest.lifecycle !== "development") throw new Error("Phase 1 lifecycle must remain development");
if (manifest.conformance?.status === "conformant") throw new Error("Phase 1 must not claim platform conformance");
for (const system of ["manager", "privacy_shield", "wardveil_security", "everkeep", "glaze_ui", "mesh", "identity"]) {
  if (!manifest.platform_systems?.[system]) throw new Error(`Platform manifest missing ${system}`);
}
console.log("Repository control validation passed.");
