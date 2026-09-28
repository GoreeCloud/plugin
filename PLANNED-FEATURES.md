# GoreeCloud ChatGPT Plugin — Planned Features

> **Authority:** Repository-native planned-feature record. The former Drive roadmap is retired after verified migration.

**Status:** Active roadmap control
**As of:** 2026-09-09
**Authoritative project specification:** `PROJECT-SPECIFICATIONS.md`
**Canonical repository:** GoreeCloud/plugin

## Purpose

This file is the repository-native planned-feature authority for GoreeCloud ChatGPT Plugin. It records planned and recommended feature work without replacing PROJECT-SPECIFICATIONS.md, implementation evidence, release gates, PROJECT-RECORD.md, or GoreeCloud Tasks Management.

## Roadmap

| ID | Feature / obligation | Priority | Current state |
| --- | --- | --- | --- |
| PLUGIN-001 | Establish and maintain the `GoreeCloud/goreecloud-plugin` repository baseline, required repository controls, licensing, and source structure. | High | **Accepted Development foundation.** PR #1 was squash-merged to `main` as `9ebe86169ae57a310ee745a88aef6826c4890b8a`; post-merge CI run `34313814872` passed repository controls, Platform Contract validation, lint, typecheck, tests, build, and dependency audit. |
| PLUGIN-002 | Implement the bounded Apps SDK / MCP foundation. | High | **Accepted Development foundation.** The merged implementation provides a loopback-only stateless MCP server, `/healthz`, `/readyz`, and read-only self-state tool `goreecloud.get_service_health`. Authentication, remote publication, external GoreeCloud access, and writes remain intentionally unimplemented. |
| PLUGIN-003 | Add read-only GoreeCloud knowledge integration before any controlled write capability. | High | **Planned / next phase.** Authentication and remote-publication boundaries must be designed and approved before external read-only integration is enabled. |
| PLUGIN-004 | Integrate applicable current platform systems, including Glaze UI where a GoreeCloud-controlled UI exists, then introduce controlled writes and operational integrations through explicit acceptance gates. | High | **Future / gated.** Manager, Privacy Shield, Wardveil Security, Everkeep, Glaze UI, Mesh, and Identity remain unresolved in the Platform Contract declaration; no conformance or production claim is made. |

## Phase 1 acceptance evidence

- Pull request: `GoreeCloud/plugin#1`
- Accepted `main` revision: `9ebe86169ae57a310ee745a88aef6826c4890b8a`
- Exact-head PR CI: run `34313749897` — passed all required gates.
- Post-merge `main` CI: run `34313814872` — passed all required gates.
- Final dependency install/audit: zero reported vulnerabilities on the accepted dependency graph.
- Product lifecycle remains **Development**. Phase 1 acceptance does not authorize remote deployment, production use, external GoreeCloud data access, or writes.

## Maintenance and synchronization

- Keep this repository file
- Do not mark planned work complete from documentation alone.
- Record implementation and verification evidence before lifecycle promotion.
- Reconcile this roadmap whenever authoritative project scope, current platform requirements, feature priority, implementation status, cancellation/supersession state, dependencies, or verification evidence changes.
