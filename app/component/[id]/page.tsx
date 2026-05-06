import React, { Suspense } from "react"
import { Metadata } from "next"
import { components as simpleComponents } from "@/data/components-simple"
import { generateComponentMetadata } from "@/lib/seo-metadata"
import ComponentPageClient from "./component-page-client"

const BASE_URL = "https://cheatsheet.shadcnstore.com"

export async function generateStaticParams() {
  return simpleComponents.map((component) => ({
    id: component.id,
  }))
}

// Generate metadata for SEO - automatically placed in <head> by Next.js
export async function generateMetadata({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ variant?: string }>
}): Promise<Metadata> {
  const { id: componentId } = await params
  const { variant: variantId } = await searchParams

  // Use centralized metadata generator (supports legacy query param format)
  return generateComponentMetadata(componentId, variantId)
}

function ComponentBreadcrumbJsonLd({ componentId, componentName }: { componentId: string; componentName: string }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": `${componentName} Component`, "item": `${BASE_URL}/component/${componentId}/` },
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

export default async function ComponentPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const component = simpleComponents.find((c) => c.id === id)

  return (
    <>
      {component && (
        <ComponentBreadcrumbJsonLd componentId={id} componentName={component.name} />
      )}
      <Suspense fallback={<ComponentPageFallback />}>
        <ComponentPageClient componentId={id} />
      </Suspense>
    </>
  )
}
