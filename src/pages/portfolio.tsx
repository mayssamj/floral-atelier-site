import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Floral Atelier</title>
      </Head>
      <section className="max-w-5xl mx-auto p-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group">
            <div className="relative h-60 w-full overflow-hidden rounded">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
