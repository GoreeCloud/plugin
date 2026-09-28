# GoreeCloud ChatGPT Plugin — Planned Features

> **Authority:** Repository-native planned-feature record. Plans are not implementation evidence.

**Status:** Active roadmap control
**As of:** 2026-09-27
**Authoritative project specification:** PROJECT-SPECIFICATIONS.md
**Canonical repository:** GoreeCloud/plugin

## Purpose

This file records planned GoreeCloud ChatGPT Plugin feature and lifecycle work.

It supplements PROJECT-SPECIFICATIONS.md and must not be used to turn plans into accepted implementation claims.

Implementation state belongs in IMPLEMENTED-FEATURES.md. Significant history belongs in PROJECT-RECORD.md. Release-oriented change history belongs in CHANGELOGS.md.

## Roadmap

| ID | Feature / obligation | Priority | Current state |
| --- | --- | --- | --- |
| PLUGIN-001 | Maintain the GoreeCloud/plugin repository baseline, repository controls, licensing, canonical project records, and source structure. | High | **Accepted Development foundation / project-record migration staged.** Phase 1 is accepted; PROJECT-SPECIFICATIONS.md and PROJECT-RECORD.md are migration candidates until default-branch acceptance/readback. |
| PLUGIN-002 | Maintain the bounded Apps SDK / MCP foundation. | High | **Accepted Development foundation.** The implementation provides a loopback-only stateless MCP server, `/healthz`, `/readyz`, and read-only self-state tool `goreecloud.get_service_health`. |
| PLUGIN-003 | Reconcile the repository Platform Contract declaration and applicable platform-system requirements against current GoreeCloud authority. | High | **Required / blocked.** Existing main still records Platform Contract 0.2 and an older Glaze UI target; those values do not establish current conformance. |
| PLUGIN-004 | Design and accept authentication, authorization, and remote-publication trust boundaries. | Critical | **Planned prerequisite.** Required before external GoreeCloud read access or remote publication. |
| PLUGIN-005 | Add narrowly scoped read-only GoreeCloud knowledge integration. | High | **Planned / next product phase.** Must use approved backend interfaces and least-privilege authorization. |
| PLUGIN-006 | Add a supported interactive app experience where useful, using the current applicable Stable Glaze UI authority. | Medium | **Future / gated.** No interactive app surface is accepted today. |
| PLUGIN-007 | Integrate applicable Privacy Shield, Wardveil Security, Everkeep, Manager, Mesh, and Identity requirements. | High | **Future / gated.** No production acceptance is implied. |
| PLUGIN-008 | Introduce controlled writes only after authorization, audit, privacy, recovery, and security gates are accepted. | High | **Future / gated.** |
| PLUGIN-009 | Add operational actions only after owning services expose accepted authenticated, auditable, recoverable APIs. | High | **Future / gated.** |
| PLUGIN-010 | Keep privileged administrative and destructive actions excluded until a separately governed need and safety design justify them. | Critical | **Deferred / restricted.** |

## Phase 1 acceptance evidence

- Pull request: `GoreeCloud/plugin#1`
- Accepted main revision: `9ebe86169ae57a310ee745a88aef6826c4890b8a`
- Exact-head PR CI: `34313749897`
- Post-merge main CI: `34313814872`
- Product lifecycle remains **Development**.

Phase 1 acceptance does not authorize remote deployment, production use, external GoreeCloud data access, or writes.

## Maintenance

Google Drive feature-roadmap authority is retired.

Reconcile this file whenever project scope, platform requirements, priority, implementation status, dependencies, cancellation/supersession state, or verification evidence changes.
