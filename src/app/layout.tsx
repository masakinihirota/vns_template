import { dir } from 'i18next';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';

import { languages } from '@/app/i18n/settings';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { getURL } from '@/utils/helpers';

import '@/styles/main.css';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const meta = {
  title: 'Next.js Subscription Starter',
  description: 'Brought to you by Vercel, Stripe, and Supabase.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Vercel', 'Supabase', 'Next.js', 'Stripe', 'Subscription'],
    authors: [{ name: 'Vercel', url: 'https://vercel.com/' }],
    creator: 'Vercel',
    publisher: 'Vercel',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Vercel',
      creator: '@Vercel',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  };
}

export default async function RootLayout({ children, params: { lng = 'ja' } }) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      {/* <body className="bg-black loading"> */}
      <body className="loading">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
            id="skip"
          >
            {children}
          </main>
          <Footer />
          <Suspense>
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
