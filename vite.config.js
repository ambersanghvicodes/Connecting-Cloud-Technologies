import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ARTICLE_META, ROUTE_META } from './src/data/routes.js'

const SITE_URL = 'https://www.connectingcloud.co'

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Writes dist/<route>/index.html for every route (with that page's title,
// description and canonical URL) so deep links return 200 on GitHub Pages and
// are indexable. Also writes 404.html, sitemap.xml and robots.txt.
function staticRoutes() {
  return {
    name: 'static-routes',
    apply: 'build',
    closeBundle() {
      const dist = fileURLToPath(new URL('./dist', import.meta.url))
      const template = readFileSync(join(dist, 'index.html'), 'utf8')
      const pages = {
        ...ROUTE_META,
        ...Object.fromEntries(Object.entries(ARTICLE_META).map(([slug, meta]) => [`/insights/${slug}`, meta])),
      }

      const render = (path, { title, description }) => {
        const url = `${SITE_URL}${path === '/' ? '/' : path}`
        return template
          .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(description)}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(title)}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(description)}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
      }

      for (const [path, meta] of Object.entries(pages)) {
        const file = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html')
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(file, render(path, meta))
      }

      writeFileSync(
        join(dist, '404.html'),
        render('/404', { title: 'Page not found | Connecting Cloud', description: 'This page does not exist.' })
          .replace(/\s*<link rel="canonical"[^>]*>/, ''),
      )

      const urls = Object.keys(pages)
        .map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p}</loc></url>`)
        .join('\n')
      writeFileSync(
        join(dist, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
      writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticRoutes()],
})
