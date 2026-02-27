import { MetadataRoute } from "next"
import { components as simpleComponents } from "@/data/components-simple"
import { createVariantId } from "@/lib/data-adapter"
import { extractVariantSlug } from "@/lib/seo-metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shadcnstore.com/cheatsheet"
  const currentDate = new Date()
  const withTrailingSlash = (url: string): string => {
    return url.endsWith("/") ? url : `${url}/`
  }

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: withTrailingSlash(baseUrl),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  // Component pages - main component pages
  simpleComponents.forEach((component) => {
    routes.push({
      url: withTrailingSlash(`${baseUrl}/component/${component.id}`),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    // Component variant pages
    component.examples.forEach((example) => {
      const variantId = createVariantId(example, component.id)
      const variantSlug = extractVariantSlug(variantId, component.id)

      routes.push({
        url: withTrailingSlash(`${baseUrl}/component/${component.id}/${variantSlug}`),
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.7,
      })
    })
  })

  // Banner demo page (if it exists)
  routes.push({
    url: withTrailingSlash(`${baseUrl}/banner-demo`),
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.5,
  })

  return routes
}
