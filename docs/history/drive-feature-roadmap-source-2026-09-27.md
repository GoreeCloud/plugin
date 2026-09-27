# Historical Drive Feature Roadmap Migration Source — GoreeCloud ChatGPT Plugin

> **Status:** Historical, non-authoritative migration evidence.
> **Source:** Former Google Drive roadmap, captured during repository migration on 2026-09-27.
> **Rule:** Do not synchronize this file with Google Drive. Current feature truth is in `IMPLEMENTED-FEATURES.md`, `PLANNED-FEATURES.md`, and `CHANGELOGS.md`.

GoreeCloud ChatGPT Plugin
Feature Roadmap
Active roadmap control • As of September 9, 2026
Purpose
This document is the Drive-side feature roadmap control for GoreeCloud ChatGPT Plugin. It records current planned and recommended feature work without replacing the authoritative project record, repository implementation evidence, release gates, or GoreeCloud Tasks Management.
Repository state: GoreeCloud/goreecloud-plugin is an active Development repository. Phase 1 is accepted on main with the required repository controls, AGPL-3.0-only licensing, a bounded loopback-only MCP foundation, tests, CI, and verified post-merge evidence. Remote publication, external GoreeCloud data access, controlled writes, production deployment, and Integral Platform System conformance remain gated.
Roadmap
Phase 1 acceptance evidence
• GitHub PR #1 accepted the Phase 1 Development foundation.
• Accepted implementation revision: 9ebe86169ae57a310ee745a88aef6826c4890b8a.
• Exact-head PR CI run 34313749897 passed repository controls, Platform Contract 0.2 validation, lint, typecheck, tests, build, and dependency audit.
• Post-merge main CI run 34313814872 passed the same required gates.
• Final dependency installation and audit reported zero vulnerabilities; lifecycle remains Development.
Maintenance and synchronization
This roadmap and the corresponding repository FEATURE-ROADMAP.md must remain materially synchronized with one another and with the authoritative project or service record. Update both copies whenever feature scope, priority, dependency, implementation status, cancellation, supersession, recommendation, or verification state materially changes.
No feature may be represented as complete or Stable solely because it appears in this roadmap. Completion and lifecycle claims require the applicable authoritative implementation, validation, review, release, and production evidence.
Reconciliation rule
At each material feature change, reconcile this roadmap against the current authoritative project record, repository implementation state, applicable platform-system requirements, and GoreeCloud Tasks Management. Missing obligations, stale status, duplicated work, roadmap drift, or undocumented disposition changes are defects to correct.
Application / Service
GoreeCloud ChatGPT Plugin
Authoritative project record
Project Specification — ChatGPT Plugin
Canonical repository
GoreeCloud/goreecloud-plugin
Repository control
FEATURE-ROADMAP.md active on main; Phase 1 Development foundation accepted and verified
Drive location
GoreeCloud/Feature Roadmap/GoreeCloud ChatGPT Plugin/FEATURE-ROADMAP.docx
ID
Feature / obligation
Priority
Current state
PLUGIN-001
Establish and maintain the GoreeCloud/goreecloud-plugin repository baseline, required repository controls, licensing, and source structure.
High
Accepted Development foundation — PR #1; main revision 9ebe86169ae57a310ee745a88aef6826c4890b8a; post-merge CI 34313814872 passed.
PLUGIN-002
Implement the bounded Apps SDK / MCP foundation.
High
Accepted Development foundation — loopback-only MCP plus health/readiness and read-only self-health. Authentication, remote publication, external GoreeCloud access, and writes remain unimplemented.
PLUGIN-003
Add read-only GoreeCloud knowledge integration before any controlled write capability.
High
Planned / next phase — approve authentication and remote-publication boundaries, then add narrowly scoped read-only GoreeCloud knowledge integration.
PLUGIN-004
Integrate applicable current platform systems, including Glaze UI where a GoreeCloud-controlled UI exists, then introduce controlled writes and operational integrations through explicit acceptance gates.
High
Future / gated — Manager, Privacy Shield, Wardveil Security, Everkeep, Glaze UI, Mesh, and Identity remain unresolved; no conformance, Release Candidate, Stable, or production claim.
