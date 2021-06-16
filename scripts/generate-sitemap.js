const fs = require("fs")

const globby = require("globby")
const prettier = require("prettier")

module.exports = async function (url) {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js")
  const pages = await globby([
    "pages/**/*.{js,ts,jsx,tsx}",
    "!pages/_*.{js,ts,jsx,tsx}",
    "!pages/api",
    "!pages/404.js",
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .filter(
                (page) =>
                  // TODO: Find all possible paths for subUrls
                  !page.includes("[")
              )
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
                            <loc>${`${url}${route}`}</loc>
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

  fs.writeFileSync("public/sitemap.xml", formatted)
}
