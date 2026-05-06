import { components as simpleComponents } from "@/data/components-simple"

const BASE_URL = "https://cheatsheet.shadcnstore.com"

// Add JSON-LD structured data
export default function JsonLd() {
  const dateModified = new Date().toISOString()

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}/`,
        "name": "Shadcn UI Cheatsheet",
        "description": "Interactive cheatsheet for Shadcn/UI components with live previews and examples",
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "SiliconDeck",
        "url": "https://silicondeck.com/",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/logo.png`
        }
      },
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": `${BASE_URL}/#webpage`,
        "url": `${BASE_URL}/`,
        "name": "Shadcn UI Cheatsheet - Complete Component Guide & Examples",
        "datePublished": "2024-01-15",
        "dateModified": dateModified,
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "about": {
          "@type": "ItemList",
          "name": "Shadcn UI Components",
          "description": "Complete list of Shadcn/UI components with live previews and copy-paste examples",
          "numberOfItems": simpleComponents.length,
          "itemListElement": simpleComponents.map((component, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": `${component.name} Component`,
            "url": `${BASE_URL}/component/${component.id}/`
          }))
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Shadcn/UI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shadcn/UI is a component library built on Tailwind CSS and Radix UI primitives. Unlike traditional libraries, you copy components directly into your project, giving you full control over styling and behavior."
            }
          },
          {
            "@type": "Question",
            "name": "How do I install Shadcn/UI components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the shadcn CLI to add components: npx shadcn@latest add [component-name]. This copies the component files directly into your project."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize Shadcn/UI components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, since components are copied into your project, you have complete control. Modify styling, add props, or change behavior as needed."
            }
          },
          {
            "@type": "Question",
            "name": "Is Shadcn/UI free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Shadcn/UI is completely free and open-source. Components are MIT licensed and you can use them in any project, including commercial ones."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
