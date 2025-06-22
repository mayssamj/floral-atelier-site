import Head from 'next/head';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Floral Atelier</title>
        <meta name="description" content="High‑end floral installations & art" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 gap-6">
        <h1 className="text-5xl font-serif tracking-tight">Floral Atelier</h1>
        <p className="text-xl text-gray-600 text-center max-w-md">
          Bespoke floral art for architecture, hospitality, and immersive spaces.
        </p>
        <Link href="/portfolio" className="px-6 py-2 bg-primary text-white rounded">
          View Portfolio
        </Link>
        <ThemeToggle />
      </main>
    </>
  );
}
