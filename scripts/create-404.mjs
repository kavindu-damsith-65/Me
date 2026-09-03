import { writeFile } from 'node:fs/promises'

const fallback = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Redirecting…</title>
    <script>
      var base = location.pathname.indexOf('/Me') === 0 ? '/Me/' : '/';
      location.replace(base + location.search + location.hash);
    </script>
  </head>
  <body><p>Taking you back to <a href="./">Kavindu’s portfolio</a>…</p></body>
</html>`

await writeFile(new URL('../dist/404.html', import.meta.url), fallback, 'utf8')
