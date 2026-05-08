import { MetadataRoute } from "next"
import { components as simpleComponents } from "@/data/components-simple"
import { createVariantId } from "@/lib/data-adapter"
import { extractVariantSlug } from "@/lib/seo-metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cheatsheet.shadcnstore.com"
  // Static W3C date (YYYY-MM-DD) — avoids invalid lastmod timestamp errors in sitemap validators.
  // Update this whenever content is significantly changed.
  const lastModified = "2026-05-08"
  const withTrailingSlash = (url: string): string => {
    return url.endsWith("/") ? url : `${url}/`
  }

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: withTrailingSlash(baseUrl),
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  // Component pages - main component pages
  simpleComponents.forEach((component) => {
    routes.push({
      url: withTrailingSlash(`${baseUrl}/component/${component.id}`),
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    // Component variant pages — skip the default variant (first example) because
    // it renders the same content as the base /component/[id]/ page. Including it
    // causes "Duplicate without user-selected canonical" errors in GSC.
    component.examples.forEach((example, index) => {
      if (index === 0) return // default variant is already covered by the base URL

      const variantId = createVariantId(example, component.id)
      const variantSlug = extractVariantSlug(variantId, component.id)

      routes.push({
        url: withTrailingSlash(`${baseUrl}/component/${component.id}/${variantSlug}`),
        lastModified: lastModified,
        changeFrequency: "weekly",
        priority: 0.7,
      })
    })
  })

  return routes
}
