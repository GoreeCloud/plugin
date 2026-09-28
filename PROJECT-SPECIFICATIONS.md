# GoreeCloud ChatGPT Plugin — Project Specifications

**Document Type:** Repository-Native Project Specification  
**Status:** Active specification / Development  
**Project:** GoreeCloud ChatGPT Plugin  
**Repository:** GoreeCloud/plugin  
**Authority:** Repository-local project specification  
**License:** AGPL-3.0-only  
**Last Updated:** 2026-09-27

## 1. Purpose

GoreeCloud ChatGPT Plugin is GoreeCloud's controlled conversational integration layer for approved ChatGPT, Codex, and compatible MCP-based clients.

Its purpose is to expose narrowly scoped GoreeCloud capabilities through documented tools, explicit identity and authorization boundaries, validation, auditability, privacy controls, and recoverable workflows without granting a conversational client unrestricted access to GoreeCloud systems.

The integration does not replace GoreeCloud Manager, GoreeCloud Identity, Wardveil Security, GoreeCloud Network, service-specific administrative interfaces, or the authoritative systems that own the underlying data and actions.

## 2. Current Lifecycle and Accepted Implementation

The project is in **Development**.

Authoritative `main` currently contains the accepted Phase 1 foundation and the repository-native feature-state records merged through 2026-09-27.

Phase 1 was accepted through pull request #1 and merge commit:

`9ebe86169ae57a310ee745a88aef6826c4890b8a`

The accepted Phase 1 implementation provides:

- a native GoreeCloud TypeScript MCP server foundation;
- stateless MCP Streamable HTTP transport;
- a loopback-only development bind boundary;
- local `/healthz` and `/readyz` endpoints;
- the read-only `goreecloud.get_service_health` tool limited to plugin self-state;
- repository validation, lint, typecheck, tests, build, and dependency-audit automation;
- a machine-readable GoreeCloud Platform Contract declaration; and
- AGPL-3.0-only licensing.

Exact-head PR CI run `34313749897` and post-merge main CI run `34313814872` passed the Phase 1 validation chain recorded by the repository.

The current product does **not** provide remote publication, external GoreeCloud data retrieval, controlled writes, operational actions, administrative actions, destructive actions, production deployment, or a ChatGPT-hosted interactive app surface.

## 3. External OpenAI Platform Boundary

OpenAI platform terminology and availability are externally controlled and may change independently of GoreeCloud.

As verified from official OpenAI documentation on 2026-09-27:

- plugins can package reusable workflow capabilities including skills, connected apps, and app templates;
- ChatGPT apps can be built with the Apps SDK;
- the Apps SDK extends the Model Context Protocol so developers can define app logic and interactive interfaces;
- custom Apps SDK/MCP applications can be tested through supported Developer Mode workflows;
- app and plugin access remains subject to applicable plan, workspace, role, provider authorization, action, and administrative controls;
- ChatGPT connects to remote MCP servers rather than ordinary local MCP servers; supported private-network scenarios may use OpenAI's Secure MCP Tunnel.

The durable GoreeCloud architecture is therefore an MCP-based integration service with optional OpenAI plugin/app packaging. GoreeCloud must not hard-code critical business logic solely to a temporary OpenAI product label or UI.

Current external references:

- https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex
- https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk
- https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt

## 4. Architectural Model

The intended architecture is:

```text
ChatGPT / Codex / compatible MCP client
        ↓
GoreeCloud plugin or app packaging
        ↓
GoreeCloud Apps SDK experience where applicable
        ↓
GoreeCloud-controlled MCP service
        ↓
Authentication and authorization boundary
        ↓
Approved GoreeCloud API / integration layer
        ↓
Authorized GoreeCloud applications, services, documentation,
repositories, tasks, monitoring, and operational systems
```

The MCP service must not bypass the authority of the system that owns the requested information or action.

Where a stable GoreeCloud API or integration boundary exists, tools should use that boundary rather than coupling directly to internal application databases, filesystems, or implementation details.

## 5. Functional Scope

### 5.1 Read and Discovery

The product may provide narrowly scoped read capabilities such as:

- search approved GoreeCloud documentation;
- read approved project specifications and project records;
- retrieve repository and project status;
- retrieve task status;
- retrieve approved service health and monitoring information;
- retrieve non-secret application, deployment, and infrastructure metadata.

Read access must remain purpose-specific and authorization-aware.

### 5.2 Controlled Write

Future controlled-write capabilities may include:

- create or update approved tasks;
- create repository-native or governed changelog entries;
- update approved project metadata;
- create or revise approved GoreeCloud documentation;
- submit narrowly scoped application changes through approved service APIs.

Controlled writes must be attributable, validated, bounded, recoverable where applicable, and authoritatively read back after material changes.

### 5.3 Operational Actions

Future operational tools may:

- trigger approved non-destructive workflows;
- initiate validated synchronization, monitoring, backup, verification, or maintenance operations;
- request deployment or maintenance operations through approved backend interfaces; and
- perform application-specific administrative workflows only when the underlying service exposes an accepted API.

### 5.4 Administrative and Destructive Actions

High-impact administrative and destructive actions are the most restricted capability classes.

They include security-policy changes, identity/access administration, infrastructure changes, production deployment changes, credential-sensitive operations, deletion, and irreversible data or resource removal.

These actions may remain excluded entirely from early releases.

## 6. Risk Classes

Every exposed tool must be assigned the narrowest applicable risk class.

### Class 1 — Read

Retrieves authorized information without modifying GoreeCloud state.

### Class 2 — Controlled Write

Modifies ordinary records or application data through a bounded and attributable interface.

### Class 3 — Operational

Changes jobs, services, deployment-related state, synchronization, monitoring, backup, or comparable operational state.

### Class 4 — Privileged Administrative

Changes security policy, identity, access, infrastructure configuration, secrets-related controls, or other high-impact administrative state.

### Class 5 — Destructive

Deletes information, removes infrastructure, revokes critical access, destroys persistent data, or performs another action that cannot be trivially reversed.

Higher-risk classes require stronger authorization, validation, confirmation where applicable, auditing, and recovery/rollback controls.

## 7. Tool Design Requirements

Each MCP tool must define:

- stable name and identifier;
- documented role and purpose;
- authoritative backend system;
- read/write behavior;
- required caller or service identity;
- required permission scopes;
- input schema;
- output schema;
- validation rules;
- error behavior;
- audit requirements;
- privacy classification;
- recovery or rollback expectations where applicable;
- human approval or confirmation requirements where applicable;
- permitted lifecycle environments.

The product must not expose generic unrestricted shell execution, arbitrary filesystem writing, arbitrary database queries, arbitrary HTTP requests, unrestricted code execution, or comparable broad escape hatches merely for convenience.

## 8. Initial and Planned Tool Surface

The initial accepted implementation contains only:

- `goreecloud.get_service_health`

It is read-only, accepts no arguments, reports only plugin-process Development state, and has no external GoreeCloud data authority.

Planned read-only capabilities may include purpose-specific equivalents of:

- `goreecloud.search_documents`
- `goreecloud.read_document`
- `goreecloud.list_projects`
- `goreecloud.get_project_status`
- `goreecloud.search_changelogs`
- `goreecloud.get_service_health`
- `goreecloud.get_repository_status`
- `goreecloud.get_deployment_status`
- `goreecloud.list_tasks`
- `goreecloud.get_task`

Later write and operational tools must be introduced only through separately accepted implementation and security gates.

## 9. Authentication and Authorization

The integration should use dedicated application, service, or delegated identities rather than ordinary personal or administrative credentials whenever the backend supports that model.

Preferred model:

```text
plugin/app
  → dedicated or delegated identity
  → narrowly scoped credential or session
  → approved API
  → specifically authorized resources/actions
```

OAuth or another identity-aware delegated model is preferred where it provides stronger attribution, scope control, short-lived authorization, and revocation than a long-lived shared key.

Long-lived credentials, where unavoidable, must have one documented purpose, minimum required permissions, approved storage, rotation requirements, and revocation procedures.

Authorization must be enforced by the backend authority and not inferred solely from model output, prompt text, user claims, or UI state.

## 10. Sensitive Information

Reusable credentials and protected secret material must never be committed to source control or copied into ordinary project documentation.

This includes:

- API keys;
- OAuth client secrets;
- refresh tokens;
- private keys;
- session secrets;
- signing material;
- recovery secrets;
- passwords;
- other reusable privileged values.

Documentation may identify the credential's purpose, service identity, scope, approved storage location, rotation requirements, and revocation process without storing the secret itself.

## 11. Privacy and Data Minimization

The plugin must follow privacy-by-default and least-data principles.

Tools should return purpose-specific structured information instead of broad raw exports whenever practical.

The integration must not transmit whole databases, unrestricted document libraries, raw user files, broad logs, credentials, unrelated personal data, or other information merely because a backend account can technically access it.

User, family, service, and administrative boundaries must remain separate.

Access to one tool or one person's authorized data does not imply access to another person's private information or to infrastructure administration.

Logs and diagnostics must avoid secret values and minimize private content.

## 12. Wardveil Security

Wardveil Security provides the GoreeCloud security identity and control model for privileged plugin workflows.

Applicable requirements include:

- risk classification;
- operation-type visibility;
- scope validation;
- least-privilege enforcement;
- confirmation requirements for sensitive changes;
- fail-closed handling when identity or authorization cannot be verified;
- detection or rejection of requests beyond approved scope;
- safe security-relevant audit metadata without protected secret values;
- clear blocked, partial, failed, and verified states.

Security status must derive from real evidence and must not be presented as a decorative badge.

## 13. Glaze UI

Any GoreeCloud-controlled interactive interface presented through an Apps SDK or equivalent supported surface must comply with the **current applicable Stable Glaze UI authority at implementation and acceptance time**.

The repository's accepted Phase 1 has no interactive app surface and therefore has no Glaze UI consumer acceptance evidence.

The current repository Platform Contract file still records an older Glaze UI target and Platform Contract schema. That declaration describes existing repository state; it must not be interpreted as proof that the product satisfies current platform governance.

A future UI should prioritize:

- clear action intent;
- source and destination context;
- permission and risk visibility;
- accessible status communication;
- explicit confirmation for sensitive changes;
- concise read-only presentation;
- clear success, partial-success, blocked, and failure states.

## 14. GoreeCloud API and Integration Layer

Critical GoreeCloud business logic should reside in reusable GoreeCloud services or application APIs rather than exclusively inside ChatGPT-specific UI or packaging.

Preferred long-term model:

```text
MCP tool
  → GoreeCloud integration service / approved application API
  → owning application or infrastructure capability
```

This preserves technology independence and supports future MCP-compatible clients or GoreeCloud-native/local AI experiences.

## 15. Deployment and Network Exposure

The MCP service must have its own identity, access controls, monitoring, update process, and recovery procedure.

The accepted Phase 1 server is intentionally loopback-only and rejects non-loopback binding because remote authentication and publication have not been accepted.

A future remote endpoint must not be exposed publicly merely to satisfy a client connectivity requirement.

Remote publication requires an approved architecture covering:

- authentication;
- authorization;
- encryption in transit;
- ingress restrictions;
- rate and abuse controls where applicable;
- logging and monitoring;
- secret management;
- rollback/disable path;
- private-network or tunnel design where appropriate;
- end-to-end acceptance evidence.

## 16. Technology Independence

The project must remain portable across conversational clients where practical.

MCP is the primary integration protocol boundary.

OpenAI Apps SDK functionality may be used for supported ChatGPT app experiences, but core GoreeCloud integration logic should remain reusable independently of an OpenAI-specific interface.

A future locally hosted AI client or other compatible MCP client should be able to reuse approved tool and backend interfaces with limited adaptation.

## 17. Repository Structure

The repository may contain:

```text
apps/
  chatgpt/
mcp/
  server/
  tools/
  schemas/
  authorization/
packages/
  goreecloud-api/
  shared/
ui/
  glaze/
security/
  wardveil/
tests/
docs/
deploy/
.github/
LICENSE
README.md
```

The actual structure may evolve with the selected SDK, runtime, deployment model, and reusable GoreeCloud service boundaries.

## 18. Development Phases

### Phase 0 — Documentation and Architecture

Define scope, authority boundaries, naming, repository model, security architecture, and initial read-only use cases.

### Phase 1 — Repository and MCP Foundation

**Accepted Development foundation.**

Establish repository controls, TypeScript/MCP service foundation, local health/readiness, CI, tests, dependency controls, licensing, and a bounded read-only self-health tool.

### Phase 2 — Read-Only GoreeCloud Knowledge Integration

Design and approve authentication, authorization, and remote-publication trust boundaries.

Add narrowly scoped document, project, task, repository, service-health, and status retrieval through approved APIs.

### Phase 3 — Interactive App Experience

Add supported OpenAI Apps SDK or equivalent interactive interfaces using applicable Glaze UI requirements.

### Phase 4 — Wardveil Security Controls

Add risk presentation, scope enforcement, security-state evidence, confirmation behavior, auditing, and fail-closed handling.

### Phase 5 — Controlled Writes

Introduce narrowly scoped task, changelog, metadata, and document updates with authoritative readback and recovery controls.

### Phase 6 — Operational Integrations

Add selected operational workflows only after the owning services expose accepted authenticated, auditable, and recoverable APIs.

### Phase 7 — Production Acceptance

Complete security, privacy, authentication, authorization, network, monitoring, recovery, rollback, documentation, platform-integration, and end-to-end acceptance gates.

## 19. Production Acceptance Requirements

The product must not be described as production-ready or Stable until evidence establishes, at minimum:

- supported OpenAI integration methods are used for the intended deployment;
- only approved tools are exposed;
- each tool has a defined role, schema, permission class, privacy boundary, and owning backend;
- read-only tools cannot mutate state;
- write tools cannot exceed documented scope;
- privileged credentials are isolated from ordinary operations;
- active secret values are absent from source and ordinary documentation;
- authentication, authorization, revocation, and scope enforcement work as designed;
- unauthorized access fails safely;
- high-risk operations receive required additional controls;
- applicable Wardveil Security behavior is accepted;
- applicable Glaze UI conformance is accepted for interactive GoreeCloud-controlled surfaces;
- personal and administrative information remain separated by authorization;
- logs do not expose protected secrets or unnecessary private data;
- remote publication does not create unnecessary public exposure;
- monitoring and audit visibility are operational;
- persistent state has appropriate backup/recovery controls;
- a documented disable/rollback path exists;
- removal of the integration does not make core GoreeCloud services unusable;
- applicable current platform-system requirements are satisfied or explicitly accepted as non-applicable.

CI success alone does not establish production or Stable acceptance.

## 20. Current Repository Gaps

The accepted repository still intentionally lacks:

- external GoreeCloud knowledge access;
- GoreeCloud Identity authentication/authorization;
- Privacy Shield runtime integration;
- Wardveil Security runtime integration;
- Everkeep continuity integration;
- GoreeCloud Mesh integration;
- GoreeCloud Manager integration;
- an accepted current Glaze UI app surface;
- remote MCP publication;
- controlled writes;
- operational actions;
- administrative/destructive tools;
- production deployment and acceptance.

The repository Platform Contract declaration also requires reconciliation with current GoreeCloud platform governance before production qualification.

## 21. Current Dependency Baseline

The accepted repository currently declares the following direct runtime/development baseline:

- Node.js: >=22 <23;
- @modelcontextprotocol/ext-apps: 1.0.1;
- @modelcontextprotocol/sdk: 1.30.0;
- express: 5.1.0;
- zod: 3.25.0;
- TypeScript: 5.9.2;
- tsx: 4.23.13.

These versions describe accepted repository state, not permanent product requirements. Dependency changes require compatibility, security, provenance, licensing, and validation review.

A reviewed lockfile and reproducible dependency resolution remain required before Release Candidate or Stable qualification.

## 22. Current Platform-System Boundary

The accepted repository Platform Contract file currently uses schema 0.2 and declares Manager, Privacy Shield, Wardveil Security, Everkeep, Glaze UI, Mesh, and Identity as applicable but blocked/unaccepted.

That declaration is historical/current repository state. It must not be treated as evidence that schema 0.2 or its recorded Glaze UI version remains the latest governing GoreeCloud platform authority.

Before production or Stable qualification, the repository must migrate to the then-current applicable Platform Contract and platform-system requirements and produce accepted evidence for each applicable integration or explicit non-applicability.

## 23. Maintenance

PROJECT-SPECIFICATIONS.md must be updated when material scope, architecture, authentication, authorization, tool classes, OpenAI integration boundaries, platform requirements, privacy/security requirements, deployment model, or acceptance gates change.

PROJECT-RECORD.md preserves significant history and evidence.

IMPLEMENTED-FEATURES.md records accepted implementation only.

PLANNED-FEATURES.md records planned capabilities and obligations.

CHANGELOGS.md records release- and repository-oriented changes.

After migration acceptance and authoritative default-branch readback, Google Drive must no longer remain a parallel project-specification or project-record authority.
