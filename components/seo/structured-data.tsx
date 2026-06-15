import { faqs } from "@/content/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#business`,
      name: "Aeternum Webspace Studio",
      url: baseUrl,
      description: "Jasa pembuatan website, landing page, backend, database, dashboard internal, dan deployment untuk bisnis modern.",
      areaServed: "Indonesia",
      serviceType: ["Website Development", "Landing Page", "Web App", "Backend API", "Database", "Deployment"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+6289697100997",
        availableLanguage: ["id", "en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: "Aeternum Webspace Studio",
      url: baseUrl,
      publisher: {
        "@id": `${baseUrl}/#business`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
