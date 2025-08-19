import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Selepas Kerja Studio | Digital Solutions & IT Consulting</title>
        <meta name="description" content="SKS delivers innovative digital products and expert IT consulting services to enhance efficiency and drive digital transformation, empowering businesses, institutions, and social organizations to achieve lasting success through adaptive technology." />
        <meta name="keywords" content="digital solutions, IT consulting, software development, crowdfunding platforms, CRM systems, learning management, digital transformation, web development, mobile apps" />
        <meta name="author" content="Selepas Kerja Studio" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SKS - Selepas Kerja Studio | Digital Solutions & IT Consulting" />
        <meta property="og:description" content="SKS delivers innovative digital products and expert IT consulting services to enhance efficiency and drive digital transformation, empowering businesses, institutions, and social organizations to achieve lasting success through adaptive technology." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://selepaskerja.id" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Selepas Kerja Studio" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SKS - Selepas Kerja Studio | Digital Solutions & IT Consulting" />
        <meta name="twitter:description" content="SKS delivers innovative digital products and expert IT consulting services to enhance efficiency and drive digital transformation, empowering businesses, institutions, and social organizations to achieve lasting success through adaptive technology." />
        <meta name="twitter:image" content="/favicon.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SKS" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://selepaskerja.id" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
