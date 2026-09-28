# GoreeCloud ChatGPT Plugin — Project Record

**Document Type:** Repository-Native Project Record  
**Status:** Active  
**Project:** GoreeCloud ChatGPT Plugin  
**Repository:** GoreeCloud/plugin  
**Authority:** Repository-local project record  
**Last Updated:** 2026-09-27

## 2026-09-27 — Repository-local project specification migration staged

The project-governance record is being migrated from the transitional GoreeCloud Drive project specifications into PROJECT-SPECIFICATIONS.md and PROJECT-RECORD.md.

The migration:

- reconciles the historical repository identity GoreeCloud/goreecloud-plugin to the live GoreeCloud/plugin repository;
- preserves the accepted Phase 1 implementation state;
- preserves the repository-native feature records merged through PR #4;
- updates time-sensitive OpenAI platform terminology against official OpenAI documentation;
- separates normative requirements from historical implementation evidence; and
- removes the competing root SPECIFICATIONS.md from the migration candidate.

The two Drive project-specification sources remain protected until this migration is reviewed, accepted on the default branch, read back from main, and confirmed complete. Permanent Drive deletion follows only after that gate.

## 2026-09-27 — Feature-state authority migrated to Git

Pull request #4, "Migrate plugin feature tracking from Drive," was merged to main.

- PR head: `3c11e2ab47aec6c80dc93b6ff318e447d94c38ae`
- Merge commit: `7b6014fe3d8e81b9144d4f222649572db0675d61`

The repository now maintains:

- IMPLEMENTED-FEATURES.md;
- PLANNED-FEATURES.md; and
- CHANGELOGS.md

as repository-native feature/change records.

The former Drive roadmap was retired as an authority and historical source material was retained only as non-authoritative history.

No lifecycle promotion, remote publication, external-data authority, controlled-write acceptance, production deployment, or Stable status was established by that migration.

## 2026-09-18 — Repository identity transition

Historical project and repository documentation used the name:

`GoreeCloud/goreecloud-plugin`

The live canonical repository is now:

`GoreeCloud/plugin`

Pull request #3, "docs: prepare plugin repository rename," was closed without merge.

The live GitHub repository identity, rather than the closed preparation PR, controls current repository naming.

All current project documentation must use GoreeCloud/plugin except when describing historical state.

## 2026-09-09 — Phase 1 documentation reconciliation accepted

Pull request #2, "docs: reconcile accepted Phase 1 records," was merged after the initial implementation foundation.

- PR head: `25e8c9093131eb4070c8e0e58301f2f02d6e1222`
- Merge commit: `3ef3a7debbe084168b4c7434db5748c39594cdef`

The reconciliation aligned repository documentation with the accepted Development implementation and its explicit non-production boundaries.

## 2026-09-09 — Phase 1 foundation accepted

Pull request #1, "feat: establish ChatGPT Plugin Phase 1 foundation," was accepted and merged.

- PR head: `a4b251edefd5c799d89b63f173c9e032e541cd85`
- Merge commit: `9ebe86169ae57a310ee745a88aef6826c4890b8a`
- Exact-head PR CI: `34313749897`
- Post-merge main CI: `34313814872`

The validation chain recorded repository controls, Platform Contract 0.2 validation, lint, typecheck, tests, build, and dependency audit as passing.

The accepted dependency graph reported zero vulnerabilities in the recorded Phase 1 evidence.

### Accepted Phase 1 capability

The implementation established:

- Node.js 22 / TypeScript MCP service foundations;
- a stateless Streamable HTTP MCP endpoint;
- loopback-only binding;
- local health and readiness endpoints;
- the read-only `goreecloud.get_service_health` self-state tool;
- repository validation and CI;
- AGPL-3.0-only licensing.

### Acceptance boundary

Phase 1 did **not** establish:

- remote publication;
- authentication or delegated authorization;
- GoreeCloud Drive, GitHub, task, monitoring, project, or deployment retrieval;
- controlled writes;
- operational actions;
- administrative or destructive actions;
- persistent application data;
- an Apps SDK interactive surface;
- production deployment;
- Release Candidate or Stable status.

## 2026-08-19 — Initial project architecture established

The original GoreeCloud project specification established the ChatGPT Plugin as an active GoreeCloud integration project based on:

- a GoreeCloud-controlled MCP server;
- OpenAI Apps SDK support where applicable;
- explicit tool and permission boundaries;
- dedicated service or delegated identities;
- least privilege;
- Wardveil Security for privileged workflow controls;
- Glaze UI for applicable GoreeCloud-controlled interactive surfaces;
- privacy-by-default data minimization;
- reusable GoreeCloud API/integration boundaries;
- technology independence so approved MCP tools can later serve other compatible clients.

The project explicitly rejected unrestricted shell, filesystem, database, network, and infrastructure authority as a convenience feature.

## 2026-09-27 — External OpenAI platform assumptions reverified

Official OpenAI documentation was checked during the project-record migration.

Current documented platform facts include:

- plugins package workflow capabilities and can include skills, connected apps, and app templates;
- the Apps SDK is built on and extends MCP for ChatGPT apps;
- supported Developer Mode workflows can test custom Apps SDK/MCP apps;
- plugin/app use remains subject to plan, workspace, role, provider authorization, action, and administrative controls;
- ChatGPT uses remote MCP servers rather than directly attaching to an ordinary local MCP server;
- supported private-network scenarios may use Secure MCP Tunnel.

References:

- https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex
- https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk
- https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt

These external facts may change and should be reverified when they materially affect implementation or deployment decisions.

## Open project-governance items

The repository's current Platform Contract file remains on schema 0.2 and records an older Glaze UI target.

That is accepted repository state, not proof of conformance with current GoreeCloud platform governance.

Before production or Stable qualification, the project must reconcile the Platform Contract and all applicable platform-system requirements against current authority and produce accepted evidence.

The repository remains Development.
