import { writeFileSync } from "fs"
import { globby } from "globby"
import prettier from "prettier"

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js")
  const pages = await globby(["pages/*.js", "!pages/_*.{js,ts,jsx,tsx}", "!pages/api", "!pages/404.{js,ts,jsx,tsx}"])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const route = page
              .replace("pages", "")
              .replace(".jsx", "")
              .replace(".tsx", "")
              .replace(".js", "")
              .replace(".ts", "")
              .replace("/index", "")

            return `
              <url>
                  <loc>${`https://nextjs-wabbit.vercel.app${route}`}</loc>
              </url>
            `
          })
          .join("")}
    </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  })

  writeFileSync("public/sitemap.xml", formatted)
}

generate()
