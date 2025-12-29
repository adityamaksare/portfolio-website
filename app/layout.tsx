import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Data Engineer Portfolio | Real-Time Stream Processing Expert",
  description: "Data Engineer specializing in real-time streaming pipelines with Apache Kafka and PySpark. Built production-grade fraud detection system achieving 95%+ accuracy with sub-500ms latency. Based in Pune, India.",
  keywords: [
    "Data Engineer",
    "Apache Kafka",
    "PySpark",
    "Real-Time Data Pipelines",
    "Stream Processing",
    "ETL",
    "Data Engineering Portfolio",
    "Pune Data Engineer",
    "MongoDB",
    "Python Data Engineer",
    "Fintech Data Engineer"
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Data Engineer Portfolio | Real-Time Stream Processing Expert",
    description: "Data Engineer specializing in real-time streaming pipelines with Apache Kafka and PySpark. Built production-grade fraud detection system achieving 95%+ accuracy.",
    siteName: "Data Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineer Portfolio | Real-Time Stream Processing Expert",
    description: "Data Engineer specializing in real-time streaming pipelines with Apache Kafka and PySpark.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
