import { Suspense } from "react"
import type { Metadata } from "next"
import JsonLd from "./structured-data"
import { HomeContent, HomePageFallback } from "./home-client"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://cheatsheet.shadcnstore.com/",
  },
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Suspense fallback={<HomePageFallback />}>
        <HomeContent />
      </Suspense>
    </>
  )
}
