export type PageSeoDef = {
  key: string;
  label: string;
  path: string;
  defaultTitle: string;
  defaultDescription: string;
};

export const PAGE_SEO_DEFS: PageSeoDef[] = [
  { key: "home", label: "Home", path: "/", defaultTitle: "KAAVERI TMT BARS & STRUCTURAL", defaultDescription: "KAAVERI TMT Bars & Structural - Strong, Durable, and Trusted for all your construction needs." },
  { key: "about-us", label: "About Us", path: "/about-us", defaultTitle: "About Us | KAAVERI TMT & STRUCTURAL", defaultDescription: "Learn about KAAVERI, a leading manufacturer of TMT bars and structural steel products." },
  { key: "contact-us", label: "Contact Us", path: "/contact-us", defaultTitle: "Contact Us | KAAVERI TMT & STRUCTURAL", defaultDescription: "Get in touch with KAAVERI Steels for enquiries, support and dealership information." },
  { key: "products", label: "Products", path: "/products", defaultTitle: "Products | KAAVERI Steels", defaultDescription: "Explore premium TMT, structural and industrial steel offerings with detailed specifications, brochures and feature highlights." },
  { key: "blogs", label: "Blogs", path: "/blogs", defaultTitle: "Blogs & Insights | KAAVERI Steels", defaultDescription: "Read technical guides, market updates and engineering thought leadership from our teams." },
  { key: "careers", label: "Careers", path: "/careers", defaultTitle: "Careers | KAAVERI Steels", defaultDescription: "Explore job openings and build your career with KAAVERI's manufacturing excellence teams." },
  { key: "projects", label: "Projects", path: "/projects", defaultTitle: "Projects | KAAVERI Steels", defaultDescription: "Discover completed and ongoing infrastructure, industrial and commercial steel projects." },
  { key: "csr", label: "CSR", path: "/csr", defaultTitle: "Corporate Social Responsibility | KAAVERI Steels", defaultDescription: "Building a better tomorrow, together. Explore our commitment to social and environmental well-being." },
  { key: "dealers", label: "Dealers", path: "/dealers", defaultTitle: "Dealers | KAAVERI Steels", defaultDescription: "Find KAAVERI Steels dealers and distributors near you." },
  { key: "certifications", label: "Certifications", path: "/certifications", defaultTitle: "Certifications | KAAVERI Steels", defaultDescription: "View KAAVERI's quality certifications and compliance credentials." },
  { key: "media-events", label: "Media & Events", path: "/media-events", defaultTitle: "Media & Events | KAAVERI Steels", defaultDescription: "Stay updated with the latest news, media, and events at KAAVERI Steels." },
  { key: "photo-gallery", label: "Photo Gallery", path: "/photo-gallery", defaultTitle: "Photo Gallery | KAAVERI Steels", defaultDescription: "Browse production, event and project galleries in an organized visual showcase." },
  { key: "photo-video-project-gallery", label: "Photo/Video/Project Gallery", path: "/photo-video-project-gallery", defaultTitle: "Photo / Video / Project Gallery | KAAVERI Steels", defaultDescription: "Experience site visuals, milestone videos and project showcases through dynamic galleries." },
  { key: "infrastructure", label: "Infrastructure", path: "/infrastructure", defaultTitle: "Infrastructure | KAAVERI TMT Bars & Structural", defaultDescription: "Discover KAAVERI's advanced manufacturing facilities that power high-capacity, high-quality steel production." },
  { key: "technology", label: "Technology", path: "/technology", defaultTitle: "Technology | KAAVERI TMT Bars & Structural", defaultDescription: "Discover the technology behind KAAVERI's steel manufacturing processes." },
  { key: "quality-policy", label: "Quality Policy", path: "/quality-policy", defaultTitle: "Quality Policy | KAAVERI TMT Bars & Structural", defaultDescription: "Read KAAVERI's quality policy and commitment to manufacturing excellence." },
  { key: "sustainability", label: "Sustainability", path: "/sustainability", defaultTitle: "Sustainability | KAAVERI TMT Bars & Structural", defaultDescription: "Learn about KAAVERI's commitment to building a greener future with responsible and eco-friendly steel production." },
  { key: "trust-on-site", label: "Trust on Site", path: "/trust-on-site", defaultTitle: "Trust on Site | KAAVERI Steels", defaultDescription: "Book a free on-site steel test and see why builders trust KAAVERI." },
  { key: "product-brochure", label: "Product Brochures", path: "/product-brochure", defaultTitle: "Product Brochures | KAAVERI Steels", defaultDescription: "Download latest product brochures, data sheets and catalog files from one place." },
  { key: "weight-bundle-calculator", label: "Weight & Bundle Calculator", path: "/weight-bundle-calculator", defaultTitle: "Weight & Bundle Calculator | KAAVERI", defaultDescription: "Calculate TMT bar weight and bundle counts instantly with KAAVERI's calculator." },
];

const PAGE_SEO_DEF_MAP = new Map(PAGE_SEO_DEFS.map((def) => [def.key, def]));

export function getPageSeoDef(pageKey: string): PageSeoDef | undefined {
  return PAGE_SEO_DEF_MAP.get(pageKey);
}
