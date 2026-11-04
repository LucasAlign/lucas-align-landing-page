# Lucas Align website

GitHub is the source of truth for the website, its product pages, and API code.
Make and test changes with Claude or Codex, then push them to `main`.
The existing **Wraparound Landing** Replit project hosts the application and database.

## Pull and republish

In the existing Replit project's Shell, run:

```bash
bash scripts/sync-replit.sh
```

This pulls `main` with a fast-forward-only check, installs locked dependencies,
and runs the workspace build. It stops if local changes or divergent history
need attention. It does not publish automatically.

After the command succeeds, click **Republish** in Replit and verify the live site
at https://lucasalign.com, including `/engage` and `/wraparound`.
You can also use Replit's Git panel to pull from `origin/main`.

## Hosting and data

Keep the existing Replit deployment, custom domain, database, and Secrets.
Do not import this repository as a new Replit project for routine updates.
Database schema changes require a separate reviewed migration. Ordinary code
pulls and the post-merge hook do not push a schema or copy database contents.
Keep credentials and environment files out of GitHub.

## Local development

Use Node.js 24 and pnpm. The workspace is configured for Replit's Linux runtime.
Install with `pnpm install --frozen-lockfile`, then run `pnpm run build`.
Frontend commands require `PORT` and `BASE_PATH`; for a root-domain deployment,
use `BASE_PATH=/`. Database and email runtime settings come from Replit Secrets.
