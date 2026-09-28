# GoreeCloud ChatGPT Plugin — Project Record

**Document Type:** Repository-Native Project Record  
**Status:** Active  
**Project:** GoreeCloud ChatGPT Plugin  
**Repository:** GoreeCloud/plugin  
**Authority:** Repository-local project record  
**Last Updated:** 2026-09-27

## 2026-09-27 — Project specification migration staged

The GoreeCloud ChatGPT Plugin project specification and significant project history are being migrated from transitional Drive sources into PROJECT-SPECIFICATIONS.md and PROJECT-RECORD.md.

The migration reconciles the historical repository name GoreeCloud/goreecloud-plugin to the live repository GoreeCloud/plugin.

Current GitHub main controls accepted implementation state. The Drive records remain migration inputs for requirements and historical context and do not override newer repository evidence.

The Drive project-specification sources remain protected until this migration is reviewed, accepted, merged, read back from main, and verified complete.

## 2026-09-27 — Feature-state migration accepted

Pull request #4, "Migrate plugin feature tracking from Drive," was merged to main at 7b6014fe3d8e81b9144d4f222649572db0675d61.

Its exact head was 3c11e2ab47aec6c80dc93b6ff318e447d94c38ae.

The migration established repository-native IMPLEMENTED-FEATURES.md, PLANNED-FEATURES.md, and CHANGELOGS.md and preserved the richer former Drive roadmap as non-authoritative historical evidence.

No lifecycle promotion, external-data authority, controlled-write acceptance, production deployment, or Stable status was implied.

## 2026 — Phase 1 foundation accepted

Pull request #1, "feat: establish ChatGPT Plugin Phase 1 foundation," established the first bounded Development implementation.

The exact-head PR CI run 34313749897 passed repository validation, Platform Contract 0.2 validation, lint, TypeScript typecheck, tests, build, and dependency audit.

PR #1 was squash-merged to main as 9ebe86169ae57a310ee745a88aef6826c4890b8a.

Post-merge main CI run 34313814872 passed the same required gates.

The accepted dependency graph reported zero vulnerabilities at that revision.

### Accepted Phase 1 boundary

Accepted implementation includes:

- Node.js 22 / TypeScript MCP server foundation;
- stateless Streamable HTTP at /mcp;
- loopback-only unauthenticated bind boundary;
- /healthz and /readyz;
- one read-only self-state tool, goreecloud.get_service_health;
- repository controls, tests, build, typecheck, lint, dependency audit, and Platform Contract validation;
- AGPL-3.0-only licensing.

It does not include remote publication, authentication, external GoreeCloud data access, user-data access, controlled writes, operational actions, administration, destructive actions, persistent application data, production deployment, or Stable acceptance.

## Current main state at migration start

At the start of this project-specification migration, authoritative main was commit 7b6014fe3d8e81b9144d4f222649572db0675d61.

No open pull requests were found for the project during this migration audit.

Current main still declares lifecycle Development and Platform Contract schema 0.2.

All application-specific platform integrations remain unaccepted/blocked in the current manifest.

The existing root SPECIFICATIONS.md incorrectly described itself as subordinate to the Drive project specification. This migration retires that competing authority model.

The current README also referenced a retired FEATURE-ROADMAP.md path even though feature authority had already moved to IMPLEMENTED-FEATURES.md and PLANNED-FEATURES.md; the migration corrects that stale navigation.

## Product direction preserved from Drive

The Drive specification established the following enduring direction:

- a controlled conversational integration over approved GoreeCloud capabilities;
- explicit risk classes separating reads, writes, operations, administration, and destructive actions;
- narrow per-tool schemas and permission boundaries;
- no generic shell/database/filesystem/HTTP escape tools;
- service or delegated identities with least privilege;
- strict secret separation;
- Wardveil Security for evidence-backed risk/security controls;
- Glaze UI for applicable interactive GoreeCloud-controlled surfaces;
- a reusable GoreeCloud integration/API layer rather than direct coupling to every internal implementation;
- privacy-first, purpose-specific results and user/administrative separation;
- no unnecessary public exposure;
- technology independence through reusable MCP/API boundaries;
- staged progression from read-only integration to later controlled writes and operations only after separate acceptance gates.

Historical statements about specific OpenAI product availability or developer-mode behavior are treated as time-bound reference material and must be reverified before implementation decisions depend on them.

## Authority transition

After the migration is accepted and verified on main:

- PROJECT-SPECIFICATIONS.md is the canonical project specification;
- PROJECT-RECORD.md is the significant project-history/evidence record;
- IMPLEMENTED-FEATURES.md controls verified implemented features;
- PLANNED-FEATURES.md controls planned feature state;
- CHANGELOGS.md controls release/repository change history;
- the old root SPECIFICATIONS.md is retired;
- Google Drive no longer remains a parallel project-specification authority.

The Drive source documents are permanently deletable only after the default-branch migration readback and final reconciliation gate succeed.
