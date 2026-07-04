---
name: delivery-loop
description: Use when the user asks Codex to stay in an autonomous/self-correcting loop until a project change is genuinely finished, especially requests like "fica em loop", "se autocorrige", "automelhora", "continua ate finalizar", "revise e corrija tudo", "deploy automatico", or any coding task that should include inspect, implement, validate, fix, document, commit, and push. Applies to software projects, front-end prototypes, deploy/debug work, and repository maintenance.
---

# Delivery Loop

## Objective

Run a disciplined delivery loop until the requested work is actually handled, not merely attempted. Optimize for shipped, verified changes over explanation.

## Loop

Repeat this cycle until stop criteria are met or a real blocker exists:

1. Inspect the current state before editing: repo status, relevant files, build/deploy config, and recent user instructions.
2. Define the smallest next target that advances the user goal.
3. Implement the target with scoped edits.
4. Validate with the strongest practical checks: build, tests, lint, browser verification, deployed URL checks, logs, or targeted command output.
5. If validation fails, diagnose from the error, patch, and rerun validation. Do not stop at the first failure if progress is still possible.
6. Record material user requests, changes, validations, commits, pushes, blockers, and timestamps in the project retomada/continuation document when one exists.
7. Commit and push when the user has requested automatic Git discipline or when the repository workflow clearly requires it.
8. Report only the final useful state: what changed, what passed, what was pushed, and what remains blocked.

## Stop Criteria

Stop only when one is true:

- The requested behavior is implemented and verified.
- The work is blocked by external access, missing credentials, paid services, unavailable APIs, or user decision.
- Further iteration would be destructive, unsafe, or outside the user's stated scope.

Do not stop just because one command failed. Fix or route around the failure when reasonable.

## Validation Rules

- Prefer project-native commands from package scripts, Makefiles, CI config, or README.
- For front-end apps, verify both build output and visible rendering when possible.
- For deploy issues, inspect generated asset paths, public URLs, and host-specific base/path behavior.
- Treat warnings as work items when they are actionable and user-facing, but do not hide warnings by raising thresholds unless the warning is false or intentionally accepted.
- If a tool needs approval for network, Git, or host access, request the approval directly with the command.

## Git And Documentation Discipline

When the user has asked for automatic commits/pushes:

- Check `git status --short` before and after edits.
- Do not include `node_modules`, generated build folders, credentials, or local cache files.
- Update the project documentation/retomada file with absolute date/time, user request, changes made, validation, commit hash, push/deploy status, and blockers.
- Commit with a concise message after a coherent unit of work.
- Push to the configured remote/branch.
- If push fails, document the exact failure and the required external fix.

## Operating Standard

Be stubborn about completion and skeptical about assumptions. A clean final answer requires evidence: passing commands, successful render checks, successful push/deploy, or a concrete blocker.