# GoreeCloud ChatGPT Plugin

GoreeCloud ChatGPT Plugin is GoreeCloud's controlled conversational integration layer for approved ChatGPT, Codex, and compatible MCP-based clients.

## Current lifecycle

**Development — Phase 1 foundation accepted.**

The repository currently provides a loopback-bound MCP development service, local health/readiness endpoints, and one read-only self-health MCP tool.

It does **not** provide external GoreeCloud data access, controlled writes, operational actions, administrative/destructive actions, production deployment, or an accepted remote ChatGPT app surface.

## Project authority

- [PROJECT-SPECIFICATIONS.md](./PROJECT-SPECIFICATIONS.md) — normative project requirements, architecture, security/privacy boundaries, and acceptance gates.
- [PROJECT-RECORD.md](./PROJECT-RECORD.md) — significant project history, repository transitions, accepted milestones, and evidence.
- [IMPLEMENTED-FEATURES.md](./IMPLEMENTED-FEATURES.md) — accepted implementation state.
- [PLANNED-FEATURES.md](./PLANNED-FEATURES.md) — planned capability and obligation state.
- [CHANGELOGS.md](./CHANGELOGS.md) — release- and repository-oriented change history.

After project-record migration acceptance and default-branch readback, the GitHub repository is the authoritative location for project specifications and project history.

## Implemented Phase 1 surface

- MCP Streamable HTTP endpoint: `http://127.0.0.1:8787/mcp`
- Local health endpoint: `http://127.0.0.1:8787/healthz`
- Local readiness endpoint: `http://127.0.0.1:8787/readyz`
- MCP tool: `goreecloud.get_service_health`
  - read-only;
  - self-service status only;
  - no external GoreeCloud data access;
  - no mutation capability.
- Fail-closed loopback binding in the unauthenticated Phase 1 baseline.

## Development

```bash
npm install --ignore-scripts
npm run validate:repository
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

Configuration is documented in `.env.example`.

The Phase 1 server refuses non-loopback host bindings because authentication and remote publication are not yet implemented.

## Governance

The current repository Platform Contract declaration reflects accepted repository state but is not proof of conformance with the latest GoreeCloud platform governance.

Missing platform integrations and current-contract reconciliation remain blockers for later production/Stable qualification.

Additional records:

- `FEATURES.md` — human-readable current capability summary;
- `SECURITY.md` — security boundaries and reporting guidance;
- `USER-MANUAL.md` — current Development usage;
- `docs/architecture.md` — Phase 1 architecture and trust boundaries;
- `docs/recovery.md` — recovery model;
- `deploy/README.md` — deployment prohibition/current gate.

## License

GoreeCloud ChatGPT Plugin is licensed under **GNU Affero General Public License v3.0 only (AGPL-3.0-only)**. See `LICENSE`.
