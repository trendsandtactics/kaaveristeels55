import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupRenderer from "@/components/PopupRenderer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

function resolveMetadataBase(): URL {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.kaaveristeels.co.in";

  try {
    return new URL(configured);
  } catch {
    return new URL("https://www.kaaveristeels.co.in");
  }
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: {
    default: "KAAVERI TMT BARS & STRUCTURAL | Premium Steel Manufacturer",
    template: "%s | KAAVERI Steels",
  },
  description:
    "KAAVERI TMT Bars & Structural - Strong, Durable, and Trusted steel products for all construction needs across Tamil Nadu and South India.",
  keywords: [
    "Kaaveri Steels",
    "TMT Bars",
    "Construction Steel",
    "Fe 550D TMT Bars",
    "Steel Dealers",
    "Tamil Nadu Steel Manufacturer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KAAVERI TMT BARS & STRUCTURAL",
    description: "Strong, Durable, and Trusted steel products for all your construction needs.",
    url: "https://www.kaaveristeels.co.in",
    siteName: "KAAVERI Steels",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased bg-background text-foreground flex flex-col min-h-screen [&_h1]:font-serif [&_h2]:font-serif [&_h3]:font-serif [&_h4]:font-serif [&_h5]:font-serif [&_h6]:font-serif`}
      >
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N82ZPQMB');
          `}
        </Script>

        {/* Google Tag Manager - noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N82ZPQMB"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <Header />

        <main id="top" className="flex-grow">
          {children}
        </main>

        <Footer />

        <PopupRenderer />
      </body>
    </html>
  );
}
