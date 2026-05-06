import React, { Suspense } from "react"
import { Metadata } from "next"
import { components as simpleComponents } from "@/data/components-simple"
import { generateComponentMetadata, extractVariantSlug } from "@/lib/seo-metadata"
import { createVariantId } from "@/lib/data-adapter"
import { BottomAEOContent } from "@/components/seo/bottom-aeo-content"
import ComponentPageClient from "../component-page-client"

const BASE_URL = "https://cheatsheet.shadcnstore.com"

export async function generateStaticParams() {
  const params: { id: string; variant: string }[] = []
  simpleComponents.forEach((component) => {
    component.examples.forEach((example, index) => {
      if (index === 0) return // default variant is covered by /component/[id]/
      const variantId = createVariantId(example, component.id)
      const variantSlug = extractVariantSlug(variantId, component.id)
      params.push({ id: component.id, variant: variantSlug })
    })
  })
  return params
}

// Generate metadata for SEO - automatically placed in <head> by Next.js
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; variant: string }>
}): Promise<Metadata> {
  const { id: componentId, variant: variantId } = await params

  // Use centralized metadata generator
  return generateComponentMetadata(componentId, variantId)
}

function ComponentBreadcrumbJsonLd({
  componentId,
  componentName,
  variantName,
  variantSlug,
}: {
  componentId: string
  componentName: string
  variantName: string
  variantSlug: string
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": `${componentName} Component`, "item": `${BASE_URL}/component/${componentId}/` },
      { "@type": "ListItem", "position": 3, "name": variantName, "item": `${BASE_URL}/component/${componentId}/${variantSlug}/` },
    ]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  )
}

function ComponentPageFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3 mb-8"></div>
        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  )
}

export default async function ComponentVariantPage({
  params
}: {
  params: Promise<{ id: string; variant: string }>
}) {
  const { id, variant } = await params
  const component = simpleComponents.find((c) => c.id === id)
  const example = component?.examples.find((ex) => {
    const variantId = createVariantId(ex, id)
    return extractVariantSlug(variantId, id) === variant
  })

  return (
    <>
      {component && example && (
        <ComponentBreadcrumbJsonLd
          componentId={id}
          componentName={component.name}
          variantName={example.name}
          variantSlug={variant}
        />
      )}
      {/* Server-rendered SEO background: visible to Googlebot, shows behind sheet on direct visits */}
      {component && (
        <BottomAEOContent componentId={id} componentName={component.name} />
      )}
      <Suspense fallback={<ComponentPageFallback />}>
        <ComponentPageClient
          componentId={id}
          variantId={variant}
        />
      </Suspense>
    </>
  )
}
