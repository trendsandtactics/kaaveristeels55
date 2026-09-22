export function getBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.kaaveristeels.co.in";
  return configured.endsWith("/") ? configured.slice(0, -1) : configured;
}

export function getOrganizationJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    "@id": `${baseUrl}/#organization`,
    name: "KAAVERI TMT BARS & STRUCTURAL",
    alternateName: ["KAAVERI Steels", "Kaaveri TMT", "Kaaveri TMT Bars"],
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/image/kaveerilogo.png`,
      caption: "KAAVERI Steels Logo",
    },
    image: `${baseUrl}/aboutsection.png`,
    description:
      "KAAVERI Steels is a premier steel manufacturer in South India producing high-ductility Fe 550D TMT bars, structural steel sections, and construction materials.",
    foundingDate: "1994",
    telephone: "+91-88558-24555",
    email: "info@kaaveristeels.com",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "No.7/1 & 4/3, Komal Road, Maruthur Village, Therizhandur Post, Kuttalam Taluk",
        addressLocality: "Mayiladuthurai District",
        addressRegion: "Tamil Nadu",
        postalCode: "609808",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "S.F.No: 22/1A, Musiri – Thuraiyur Main Road, Jambunathapuram Post, Musiri Taluk",
        addressLocality: "Trichy",
        addressRegion: "Tamil Nadu",
        postalCode: "621205",
        addressCountry: "IN",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-88558-24555",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-88558-24555",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/kaaveritmtbarsandstructural",
      "https://www.linkedin.com/company/kaaveritmtbarsandstructural",
      "https://www.youtube.com/@KAAVERITMTBARSANDSTRUCTURAL",
      "https://x.com/kaaveritmt",
      "https://wa.me/918855824555",
    ],
  };
}

export function getWebSiteJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "KAAVERI Steels",
    description: "Premium Fe 550D TMT Steel Bars & Structural Steel Manufacturer in Tamil Nadu",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, index) => {
        const fullPath = item.path.startsWith("http")
          ? item.path
          : `${baseUrl}${item.path.startsWith("/") ? item.path : `/${item.path}`}`;
        return {
          "@type": "ListItem",
          position: index + 2,
          name: item.name,
          item: fullPath,
        };
      }),
    ],
  };
}

export function getProductJsonLd(product?: {
  name?: string;
  description?: string;
  image?: string;
  sku?: string;
  category?: string;
}) {
  const baseUrl = getBaseUrl();
  const title = product?.name || "KAAVERI Fe 550D TMT Steel Bars";
  const desc =
    product?.description ||
    "High-ductility Fe 550D TMT reinforcement bars manufactured with advanced quenching technology for superior earthquake resistance, tensile strength, and bendability.";
  const image = product?.image || `${baseUrl}/tmt1.png`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    image: [image],
    description: desc,
    sku: product?.sku || "KAAVERI-TMT-550D",
    mpn: "IS-1786-FE550D",
    brand: {
      "@type": "Brand",
      name: "KAAVERI",
    },
    manufacturer: {
      "@id": `${baseUrl}/#organization`,
    },
    category: product?.category || "Reinforcement Steel / Construction Materials",
    material: "High Ductility Carbon Steel (Fe 550D)",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": `${baseUrl}/#organization`,
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Standard",
        value: "IS 1786:2008",
      },
      {
        "@type": "PropertyValue",
        name: "Grade",
        value: "Fe 550D",
      },
      {
        "@type": "PropertyValue",
        name: "Available Diameters",
        value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
      },
    ],
  };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    url: article.url,
    image: article.image || `${baseUrl}/aboutsection.png`,
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || article.datePublished || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: article.author || "KAAVERI Steels Technical Team",
      url: baseUrl,
    },
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };
}
