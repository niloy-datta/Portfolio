import CustomCursor from "@/components/CustomCursor";
import FluidCursor from "@/components/FluidCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profileData } from "@/data/profile";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./browser-compat.css"; // Cross-browser & device compatibility
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://niloychandra.dev"),
  title: `${profileData.name.full} - ${profileData.title}`,
  description: profileData.description,
  keywords: [
    "Java Full-Stack Engineer",
    "Java Developer",
    "Backend Developer",
    "React",
    "TypeScript",
    "Spring Boot",
    "Spring Security",
    "PostgreSQL",
    "REST APIs",
    "Portfolio",
    "Niloy Chandra Datta",
  ],
  authors: [{ name: profileData.name.full, url: "https://niloychandra.dev" }],
  creator: profileData.name.full,
  publisher: profileData.name.full,
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
    locale: "en_US",
    url: "https://niloychandra.dev",
    title: `${profileData.name.full} - ${profileData.title}`,
    description: profileData.description,
    siteName: profileData.name.full,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: profileData.name.full,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name.full} - ${profileData.title}`,
    description: profileData.description,
    creator: "@NiloyChandraDatta",
    images: ["/og-image.png"],
  },
  icons: {
    icon: `${basePath}/niloy-profile.png`,
  },
  manifest: `${basePath}/site.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: profileData.name.full,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Schema markup for JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://niloychandra.dev",
    name: profileData.name.full,
    jobTitle: profileData.title,
    description: profileData.description,
    image: profileData.profilePicture,
    email: profileData.email,
    url: "https://niloychandra.dev",
    sameAs: Object.values(profileData.social),
    knowsAbout: profileData.skills.flatMap((cat) =>
      cat.skills.map((s) => s.name)
    ),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        {/* Google Verification */}
        <meta name="google-site-verification" content="" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Alternative: Organization schema for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://niloychandra.dev",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Projects",
                  item: "https://niloychandra.dev#projects",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Contact",
                  item: "https://niloychandra.dev#contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {/* Overlay cursor সব device-এ দেখান */}
          <FluidCursor />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
