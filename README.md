# Kavindu Damsith — Portfolio


## Local development

Node.js 24 LTS is recommended.

```bash
npm install
npm run dev
```

Open the local address shown by Vite.

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Publish with GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and publishes the site automatically on every push to `main`.

1. Push this project to the `main` branch of `kavindu-damsith-65/Me`.
2. Open **Repository Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Run the workflow manually once, or push another commit.

The expected public URL is:

`https://kavindu-damsith-65.github.io/Me/`

The Vite build uses relative asset paths, so the same output also works on Vercel, Netlify, Cloudflare Pages, or a conventional static host.

## Update portfolio content

Most copy, links, projects, capabilities, journey entries, and achievements live in:

`src/data/portfolio.ts`

Global styling and theme tokens live in:

`src/styles.css`

Portfolio image assets live in `public/images/`. Confirm the publication terms for both portraits before launch.

If the production domain changes, update the canonical, Open Graph, sitemap, and JSON-LD URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

## Contact behavior

The contact form intentionally uses a `mailto:` workflow. It validates the fields in the browser, prepares the subject and message, and opens the visitor's default email application. No database, server, analytics tracker, or form processor receives the message.

## Security before launch

The projects highlighted on the site avoid repositories found to contain secret-like development configuration. Before promoting older repositories, rotate any exposed development credentials, remove secrets from files and Git history, and enable GitHub secret scanning. Never add API keys or private credentials to this portfolio.
