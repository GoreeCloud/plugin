# GoreeCloud ChatGPT Plugin — Project Specifications

**Document Type:** Repository-Native Project Specification  
**Status:** Active specification / Development  
**Project:** GoreeCloud ChatGPT Plugin  
**Repository:** GoreeCloud/plugin  
**License:** AGPL-3.0-only  
**Authority:** Repository-local project specification  
**Last Updated:** 2026-09-27

## 1. Role and purpose

GoreeCloud ChatGPT Plugin is the GoreeCloud-owned conversational integration layer for approved ChatGPT, Codex, and compatible MCP/App clients.

Its purpose is to expose explicitly approved GoreeCloud information and capabilities through narrow, documented, auditable tools without giving an external conversational client unrestricted access to GoreeCloud systems.

The Plugin does not replace GoreeCloud Manager, GoreeCloud Identity, Wardveil Security, GoreeCloud Mesh, service-specific administration, or the systems that own the underlying data and actions. It is an integration layer over those authorities.

External OpenAI product capabilities, names, developer surfaces, availability, workspace controls, and publication methods are time-sensitive dependencies. They must be reverified against current official platform documentation when they materially affect implementation or deployment. Historical Drive statements about the OpenAI platform are not treated as permanent architecture facts.

## 2. Current accepted implementation boundary

The project is in Development.

Phase 1 was accepted through pull request #1 and is present on authoritative main at commit 9ebe86169ae57a310ee745a88aef6826c4890b8a.

Exact-head PR CI run 34313749897 and post-merge main CI run 34313814872 passed repository validation, Platform Contract 0.2 validation, lint, TypeScript typecheck, tests, build, and dependency audit.

The accepted Phase 1 runtime is deliberately narrow:

- Node.js 22.x and TypeScript/ESM;
- stateless MCP Streamable HTTP;
- default loopback bind at 127.0.0.1:8787;
- MCP endpoint at /mcp;
- local health endpoint at /healthz;
- local readiness endpoint at /readyz;
- one read-only self-state tool, goreecloud.get_service_health;
- no external GoreeCloud data access;
- no write authority;
- no operational or administrative authority;
- no remote/public MCP publication;
- no user authentication or delegated identity;
- no persistent application-owned state;
- no accepted Apps SDK widget/interactive UI surface.

Current main at 7b6014fe3d8e81b9144d4f222649572db0675d61 also contains the accepted repository-native feature-state migration from PR #4.

These facts do not establish Release Candidate, Stable, production deployment, external-data access, or controlled-write acceptance.

## 3. Architecture

The target architecture is:

Conversational client  
→ GoreeCloud Plugin application experience  
→ GoreeCloud MCP server  
→ authentication and authorization boundary  
→ GoreeCloud integration/API layer  
→ approved GoreeCloud applications, services, documentation, repositories, and operational systems

Core business rules that belong to GoreeCloud services must remain in reusable GoreeCloud APIs or services rather than being embedded only in a client-specific plugin UI.

MCP is an integration boundary, not authority to bypass service-specific security, privacy, data-ownership, or operational controls.

## 4. Functional scope

The long-term product may support the following capability groups.

### 4.1 Read and discovery

Examples include:

- search approved GoreeCloud documentation;
- read project specifications, architecture records, inventories, standards, policies, and change history;
- retrieve project, repository, service, deployment, and task status;
- retrieve approved monitoring/health information;
- retrieve non-secret infrastructure and application metadata.

Read tools must return only purpose-specific information within the caller's authorized scope.

### 4.2 Controlled write

Possible future capabilities include:

- create or update approved tasks;
- create change-history entries;
- update project metadata/status;
- create or revise approved documentation;
- submit narrowly scoped application changes through approved APIs.

Writes require separate implementation and acceptance. Phase 1 does not provide them.

### 4.3 Operational actions

Future operational tools may trigger approved non-destructive workflows such as validation, synchronization, backup, monitoring, deployment, or maintenance only when the owning service exposes a stable, authenticated, auditable, and recoverable interface.

### 4.4 Administrative and destructive actions

High-impact configuration, identity/access, security administration, production deployment changes, infrastructure modification, deletion, and irreversible actions are the most restricted classes.

They may remain excluded from the product. If ever introduced, they require stronger authorization, explicit risk treatment, validation, audit, recovery/rollback controls, and any applicable confirmation requirements.

## 5. Permission and risk classes

Every exposed tool must use the narrowest applicable class:

1. **Class 1 — Read:** approved information retrieval without state mutation.
2. **Class 2 — Controlled Write:** bounded and attributable ordinary-record/application mutations with recovery.
3. **Class 3 — Operational:** actions that affect jobs, services, deployment, synchronization, monitoring, backup, or runtime state.
4. **Class 4 — Privileged Administrative:** security, identity, access, secrets, infrastructure, or production administration.
5. **Class 5 — Destructive:** deletion or another action that is difficult or impossible to reverse.

Tool risk is determined by the operation and authoritative backend effect, not by how simple the conversational prompt appears.

## 6. Tool design requirements

Every MCP tool must define:

- stable name/identifier;
- purpose;
- owning/target system;
- read/write effect;
- authentication identity;
- required permission scopes;
- accepted inputs;
- output schema;
- validation requirements;
- failure behavior;
- audit/logging requirements;
- recovery/rollback expectations where applicable;
- confirmation requirements where applicable;
- allowed environments and lifecycle stage.

The Plugin must not expose convenience tools that bypass bounded interfaces, including generic arbitrary shell execution, unrestricted file writes, unrestricted database queries, unrestricted HTTP requests, or an equivalent broad execution escape hatch.

## 7. Initial and planned tool families

The accepted Phase 1 tool surface contains only:

- goreecloud.get_service_health — read-only self-state.

Future read-only tools may include narrowly scoped document search/read, project status, task status, repository status, service health, and deployment status.

Future controlled-write tools may include narrowly scoped task, changelog, project-metadata, and document operations.

No future tool becomes implemented merely because it is named in this specification.

## 8. Authentication and authorization

The preferred model is:

Plugin/application  
→ dedicated service or delegated identity  
→ narrowly scoped credential/token  
→ approved API  
→ permitted resource/operation

Dedicated service identities should be preferred over ordinary personal or administrative credentials where the underlying system supports them.

Delegated identity-aware authorization is preferred when it provides stronger user attribution, scope control, revocation, and short-lived authorization than long-lived shared credentials.

If a long-lived credential is unavoidable, it must have one documented purpose, least privilege, approved protected storage, rotation/revocation procedures, and no reuse outside that purpose.

Authorization must be enforced by the system that owns the operation. The conversational client must not become an authorization oracle.

## 9. Sensitive information boundary

Reusable secrets must never be placed in:

- project specifications;
- source code;
- issue or pull-request text;
- change history;
- screenshots;
- ordinary test fixtures;
- ordinary logs;
- repository configuration intended for source control.

This includes API keys, OAuth client secrets, refresh tokens, private keys, signing material, session secrets, recovery values, and equivalent reusable credentials.

Documentation may record purpose, owner/service identity, scope, storage method, expiry/rotation expectations, and revocation procedure without copying secret values.

Tool outputs and errors must minimize protected information and must not expose backend secrets or unrelated private data.

## 10. Wardveil Security requirements

Wardveil Security is the required GoreeCloud security boundary where applicable to privileged Plugin workflows.

The design must support:

- operation risk classification;
- visibility into read/write/runtime/security/destructive effects;
- authorization and confirmation requirements;
- scope enforcement;
- detection/rejection of over-broad permission requests;
- audit metadata without protected secret values;
- fail-closed behavior when identity, authorization, validation, or required dependency checks fail;
- evidence-backed security state.

A “protected,” “trusted,” “verified,” or equivalent state must never be decorative.

## 11. Glaze UI requirements

Any GoreeCloud-controlled interactive surface must use the applicable current Stable Glaze UI contract at the time that surface is implemented and accepted.

The accepted Phase 1 implementation has no interactive Glaze UI surface and therefore has no application-specific Glaze UI acceptance evidence.

Interactive experiences should prioritize:

- clear action intent;
- source and destination context;
- permission and risk visibility;
- confirmation for sensitive actions;
- accessible state communication;
- clear success, partial, blocked, and failed states;
- compact presentation of read-only data;
- minimal decorative complexity.

The repository's current Platform Contract 0.2 manifest records Glaze UI 1.3.0 as its historical/current-main declared target. Future work must reverify the applicable portfolio contract rather than assuming that version remains current.

## 12. GoreeCloud integration/API layer

The MCP server should call stable GoreeCloud APIs or integration services instead of coupling directly to each product's internal database/filesystem where a stable boundary can be provided.

This separation should allow the same approved integration capabilities to serve ChatGPT, Codex, future local agents, and other approved MCP-compatible clients without moving authoritative business logic into the conversational client layer.

Backend authority, validation, privacy, and audit rules remain enforceable independently of the Plugin.

## 13. Privacy and data minimization

The Plugin is privacy-first.

Tools must expose only information needed for their documented purpose. Broad database dumps, unrestricted document libraries, raw log collections, user-file trees, credentials, or unrelated personal data must not be transmitted merely because a backend identity can access them.

Purpose-specific structured output is preferred over broad raw data.

Personal, family, administrative, tenant, service, and infrastructure boundaries must remain distinct.

A user authorized to invoke one tool does not automatically gain authority to unrelated data or administration.

## 14. Network and deployment requirements

The MCP server is a separately managed network service with its own identity, access controls, monitoring, update process, and recovery requirements.

Phase 1 is intentionally loopback-only and unauthenticated. Non-loopback bind configuration is rejected.

Remote publication requires a separately accepted authentication, authorization, network-exposure, transport, monitoring, and failure/recovery design.

An internal MCP service must not be exposed directly to the public Internet merely because an external client requires remote connectivity.

Publication or tunneling mechanisms are implementation dependencies and must be reverified against current external-platform capabilities and GoreeCloud network/security governance before use.

## 15. Technology independence

Critical GoreeCloud business logic should remain reusable outside a single conversational platform.

The architecture must preserve the ability to use approved MCP tools and GoreeCloud APIs from a future local AI client, another compatible client, or a GoreeCloud-native agent interface with limited adaptation.

External SDKs and protocols are replaceable integration dependencies, not product authority.

## 16. Current dependency baseline

Current main package metadata declares:

- Node.js >=22 <23;
- @modelcontextprotocol/ext-apps 1.0.1;
- @modelcontextprotocol/sdk 1.30.0;
- express 5.1.0;
- zod 3.25.0;
- TypeScript 5.9.2;
- tsx 4.23.13.

Direct dependency versions are exact-pinned in package.json.

Dependency acceptance must include installability, compatibility, provenance, vulnerability review, license review, and reproducibility appropriate to lifecycle.

A dependency audit that is clean at one revision is not a permanent security guarantee.

## 17. Platform-system boundary

Current accepted main uses Platform Contract schema 0.2 and records Manager, Privacy Shield, Wardveil Security, Everkeep, Glaze UI, Mesh, and Identity as applicable-blocked or otherwise unaccepted.

A syntactically valid manifest is not runtime integration evidence.

Before future lifecycle promotion, the repository must be reconciled to the then-current applicable GoreeCloud Platform Contract and all required platform systems/capabilities must have evidence-backed acceptance or a valid non-applicability determination.

GoreeCloud Sync remains separately governed and should be evaluated when synchronization is architecturally applicable.

## 18. Repository structure

The repository may contain:

- MCP server and tools;
- schemas and authorization helpers;
- client/application experience code;
- reusable GoreeCloud API packages;
- UI components;
- Wardveil/security integration;
- tests;
- documentation;
- deployment definitions;
- CI/governance controls.

Repository structure may evolve, but authoritative project requirements remain in PROJECT-SPECIFICATIONS.md and significant history/evidence remain in PROJECT-RECORD.md.

## 19. Development phases

### Phase 0 — Documentation and architecture

Define scope, authority boundaries, naming, security architecture, and initial approved read-only use cases.

### Phase 1 — Repository and MCP foundation

Accepted on main through PR #1.

The accepted foundation includes repository controls, Node/TypeScript structure, MCP server foundation, CI/tests, exact-pinned direct dependencies, loopback-only transport, health/readiness, and a read-only self-health tool.

### Phase 2 — Read-only GoreeCloud knowledge integration

Add approved read-only document, project, task, repository, and service-status integration only after authentication/authorization and remote-publication boundaries are approved.

### Phase 3 — Interactive application experience

Implement supported interactive UI surfaces using the then-current applicable Glaze UI contract.

### Phase 4 — Wardveil Security controls

Implement risk presentation, scope validation, audit metadata, security-state evidence, confirmation behavior, and fail-closed security handling.

### Phase 5 — Controlled writes

Introduce only narrowly scoped mutations with validation, readback, attribution, audit, and recovery controls.

### Phase 6 — Operational integrations

Add selected operational workflows only when the underlying services expose accepted authenticated, auditable, recoverable APIs.

### Phase 7 — Production acceptance

Complete authentication, authorization, privacy, security, monitoring, backup/recovery where persistent state exists, rollback, publication, documentation, and end-to-end acceptance before any production-ready claim.

## 20. Acceptance requirements

Production acceptance requires, as applicable:

- current supported external integration methods verified;
- only approved MCP tools exposed;
- each tool has a documented purpose, schema, permission/risk class, and security boundary;
- read-only tools cannot mutate authoritative state;
- write tools cannot exceed documented scope;
- ordinary Plugin operations do not use broad administrator credentials;
- reusable secrets are absent from source and ordinary documentation;
- authentication, authorization, expiry/revocation, and unauthorized-access behavior work as designed;
- high-risk operations have the required additional controls;
- Wardveil Security accurately represents risk/security state where applicable;
- applicable Glaze UI conformance is accepted for interactive GoreeCloud-controlled surfaces;
- user/family/administrative information remains correctly separated;
- logs and errors do not expose protected secrets or unnecessary private data;
- remote publication does not create unnecessary exposure;
- monitoring and security-relevant audit visibility are operational;
- persistent state, if introduced, has accepted backup and recovery;
- failure modes are tested;
- rollback/recovery exists for material changes;
- all applicable platform-system obligations are accepted;
- representative end-to-end testing supports the claimed lifecycle.

Source CI alone is not production acceptance.

## 21. Maintenance and change control

This specification must change when material scope, architecture, supported external integration methods, tool permissions, authentication/authorization, privacy/security boundaries, platform contracts, deployment model, or acceptance gates change.

IMPLEMENTED-FEATURES.md controls verified implemented-feature state.

PLANNED-FEATURES.md controls planned feature work.

CHANGELOGS.md records release- and repository-oriented change history.

PROJECT-RECORD.md preserves significant project milestones, authority transitions, and evidence.

Google Drive project-specification copies are transitional migration sources only. After this migration is accepted and verified on main, they must be permanently removed and must not remain parallel authorities.
