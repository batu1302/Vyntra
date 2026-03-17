import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Base URL - sollte in Production durch Umgebungsvariable ersetzt werden
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vyntra.de";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vyntra - Moderne Web-Lösungen",
    template: "%s | Vyntra",
  },
  description:
    "Professionelles Webdesign und Webentwicklung für Ihr Unternehmen. High-Performance Websites, die nicht nur beeindrucken, sondern messbare Ergebnisse liefern.",
  keywords: [
    "Webdesign",
    "Webentwicklung",
    "Next.js",
    "React",
    "TypeScript",
    "Moderne Websites",
    "Digitale Lösungen",
    "Web-Agentur",
  ],
  authors: [{ name: "Vyntra" }],
  creator: "Vyntra",
  publisher: "Vyntra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    type: "website",
    locale: "de_DE",
    url: baseUrl,
    siteName: "Vyntra",
    title: "Vyntra - Moderne Web-Lösungen",
    description:
      "Professionelles Webdesign und Webentwicklung für Ihr Unternehmen. High-Performance Websites, die nicht nur beeindrucken, sondern messbare Ergebnisse liefern.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Vyntra - Moderne Web-Lösungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyntra - Moderne Web-Lösungen",
    description:
      "Professionelles Webdesign und Webentwicklung für Ihr Unternehmen.",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@vyntra",
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Google Search Console
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    // Bing Webmaster Tools
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    // Yandex verification code
  },
  category: "Web Development",
  classification: "Business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
  colorScheme: "dark light",
};

// JSON-LD Structured Data für bessere SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vyntra",
  description:
    "Professionelles Webdesign und Webentwicklung für Ihr Unternehmen",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  sameAs: [
    // Social Media Links hier einfügen
    // "https://www.facebook.com/vyntra",
    // "https://www.linkedin.com/company/vyntra",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    // Telefon und E-Mail hier einfügen wenn verfügbar
  },
  areaServed: "DE",
  serviceType: "Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect zu wichtigen Domains für Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS Prefetch für externe Ressourcen */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Analytics - Google Analytics 4 (kommentiert, aktivieren wenn benötigt) */}
        {/* {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )} */}
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            {/* Skip to main content link für Accessibility */}
            <a
              href="#main-content"
              className="absolute left-[-9999px] focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00CED1] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:ring-offset-2"
            >
              Zum Hauptinhalt springen
            </a>
            <ScrollToTop />
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
