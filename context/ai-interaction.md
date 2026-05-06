# AI Interaction Guidelines

## Communication

- Be concise and direct
- Explain non-obvious decisions briefly
- Ask before large refactors or architectural changes
- Don't add features not in the project spec
- Never delete files without clarification

## Workflow

This is the common workflow that we will use for every single feature/fix:

1. **Document** – Document the feature in `@context/current-feature.md`.
2. **Branch** – Create a new branch for the feature, fix, etc.
3. **Implement** – Build the feature/fix as described in `@context/current-feature.md`.
4. **Test** – Verify it works in the browser. (Unit tests later.) Run `npm run build` and fix any errors.
5. **Iterate** – Refine if needed.
6. **Commit** – Only after the build passes and everything works.
7. **Push & PR** – Push the branch to GitHub and open a Pull Request.
   - _Stop here and wait. The PR will be used to run additional checks and a manual review._
8. **Review** – Address any feedback from the PR review. Make changes, commit, and push again if necessary.
9. **Merge** – Once the PR is approved, merge to main.
10. **Delete Branch** – Delete the feature branch after merge.
11. **Document completion** – Mark the feature as completed in `@context/current-feature.md` and add it to the history.
12. **Periodic Review** – Review AI-generated code periodically and on demand.

Do NOT commit without permission and until the build passes. IF build fails, fix the issues first.

## Branching

We will create a new branch for every feature/fix. Name branch **feature/[feature]** or **fix/[fix]**, etc.
Ask to delete the branch once merged

## Commits

- Ask before committing (don't auto commit)
- Use conventional commit messages (feat:, fix:, chore:, etc.)
- Keep commits focused (one feature/fix per commit)

## When Stuck

- If something isn't working after 2-3 attempts, stop and explain the issue
- Don't keep trying random fixes
- Ask for clarification if requirements are unclear

## Code Changes

- Make minimal changes to accomplish the task
- Don't refactor unrelated code unless asked
- Don't add "nice to have" features
- Preserve existing patterns in the codebase

## Code Review

Review AI-generated code periodically, especially for:

- Security (auth checks, input validation)
- Performance (unnecessary re-renders, N+1 queries)
- Logic errors (edge cases)
- Patterns (matches existing codebase?)
