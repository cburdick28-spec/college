import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { athleteProfile } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://connor-burdick.vercel.app"),
  title: "Connor Burdick | Goalkeeper Soccer Recruit | Class of 2028",
  description:
    "Connor Burdick is a Class of 2028 goalkeeper at C.D.E. Malasaña F.C. in Madrid, Spain with a 3.6 GPA, targeting NCAA Division II and III programs at small private colleges in New England for computer science, cybersecurity, or business.",
  openGraph: {
    title: "Connor Burdick | Goalkeeper Soccer Recruit | Class of 2028",
    description:
      "Goalkeeper recruiting profile for NCAA Division II and III: film, academics, intended majors, and a technical builder portfolio.",
    type: "website",
    locale: "en_US",
    url: "https://connor-burdick.vercel.app",
    siteName: "Connor Burdick Profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connor Burdick | Goalkeeper Soccer Recruit | Class of 2028",
    description: "International goalkeeper recruit and developer portfolio.",
  },
};

const athleteSchema = {
  "@context": "https://schema.org",
  "@type": "Athlete",
  name: athleteProfile.name,
  jobTitle: athleteProfile.role,
  sport: "Soccer",
  height: athleteProfile.height,
  weight: athleteProfile.weight,
  playsPosition: athleteProfile.primaryPosition,
  nationality: athleteProfile.nationality,
  homeLocation: {
    "@type": "Place",
    name: athleteProfile.location,
  },
  alumniOf: athleteProfile.school,
  knowsAbout: [
    "Goalkeeping",
    "Soccer Recruiting",
    "Artificial Intelligence",
    "Software Development",
    "Computer Science",
    "Cybersecurity",
    "Entrepreneurship",
  ],
  sameAs: [athleteProfile.githubUrl, athleteProfile.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full bg-zinc-950 text-zinc-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(athleteSchema) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
