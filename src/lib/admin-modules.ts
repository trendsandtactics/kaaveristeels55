import {
  Search,
  Award,
  Package,
  Calendar,
  FileText,
  FolderKanban,
  Briefcase,
  MapPin,
  Image as ImageIcon,
  FileDown,
  Bell,
  Heart,
  LayoutPanelTop,
  Info,
  Layers,
  Inbox,
  Mail,
  UserCheck,
  Calculator,
  Users,
  type LucideIcon,
} from "lucide-react";

type ContentModuleName = "products" | "mediaEvents" | "blogs" | "projects" | "careers" | "dealers" | "galleries" | "brochures" | "popups" | "csr" | "pages" | "calculators" | "aboutUs" | "aboutHero";
type SupportModuleName = "enquiries" | "contact_messages" | "job_applications";
export type ModuleName = ContentModuleName | SupportModuleName | "certifications" | "pagesSeo" | "users";

export type ModuleDef = { key: ModuleName; label: string; kind: "content" | "support" | "certifications" | "seo" | "users"; description: string; icon: LucideIcon };

export type AdminSession = { role: "super" | "user"; email: string; enabledModules: ModuleName[] | "all" };
export const SESSION_STORAGE_KEY = "kaaveri_admin_session";

export const MODULES: ModuleDef[] = [
  { key: "users", label: "Admin Users", kind: "users", description: "Create admin logins and choose which modules each one can access", icon: Users },
  { key: "pagesSeo", label: "Pages SEO", kind: "seo", description: "Manage meta title, description, keywords and OG image for every site page", icon: Search },
  { key: "certifications", label: "Certifications", kind: "certifications", description: "Upload and manage certification files", icon: Award },
  { key: "products", label: "Products", kind: "content", description: "Product catalog, specs, brochure links", icon: Package },
  { key: "mediaEvents", label: "Media & Events", kind: "content", description: "Event highlights and company news", icon: Calendar },
  { key: "blogs", label: "Blogs", kind: "content", description: "Rich blog content with SEO-ready publishing", icon: FileText },
  { key: "projects", label: "Projects", kind: "content", description: "Project case studies and outcomes", icon: FolderKanban },
  { key: "careers", label: "Careers", kind: "content", description: "Job listings and vacancy details", icon: Briefcase },
  { key: "dealers", label: "Dealers", kind: "content", description: "Dealer directory with city/state filters", icon: MapPin },
  { key: "galleries", label: "Photo/Video Gallery", kind: "content", description: "Visual media and showcase assets", icon: ImageIcon },
  { key: "brochures", label: "Brochures", kind: "content", description: "Downloadable product brochures/PDFs", icon: FileDown },
  { key: "popups", label: "Popups", kind: "content", description: "Homepage event/offer popup controls", icon: Bell },
  { key: "csr", label: "CSR", kind: "content", description: "Manage Corporate Social Responsibility events and initiatives", icon: Heart },
  { key: "pages", label: "Pages Content", kind: "content", description: "Manage page-specific dynamic sections like CTAs", icon: LayoutPanelTop },
  { key: "aboutUs", label: "About Us", kind: "content", description: "Manage About Us section content and YouTube URL", icon: Info },
  { key: "aboutHero", label: "About Hero", kind: "content", description: "Manage About Hero content and images", icon: Layers },
  { key: "enquiries", label: "Enquiries", kind: "support", description: "Incoming product and generic enquiries", icon: Inbox },
  { key: "contact_messages", label: "Contact Messages", kind: "support", description: "Website contact and feedback queue", icon: Mail },
  { key: "job_applications", label: "Job Applications", kind: "support", description: "Candidate applications and resumes", icon: UserCheck },
  { key: "calculators", label: "Calculators", kind: "content", description: "Manage calculator formulas and parameters", icon: Calculator },
];

export const MODULE_GROUPS: { label: string; kinds: ModuleDef["kind"][] }[] = [
  { label: "Administration", kinds: ["users"] },
  { label: "SEO & Certifications", kinds: ["seo", "certifications"] },
  { label: "Content Modules", kinds: ["content"] },
  { label: "Support Inbox", kinds: ["support"] },
];

export const ASSIGNABLE_MODULES = MODULES.filter((m) => m.key !== "users");
