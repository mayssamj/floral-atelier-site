import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <Head>
        <title>{project.title} | Floral Atelier</title>
      </Head>
      <article className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-serif">{project.title}</h1>
        <div className="relative w-full h-96 mt-6 rounded overflow-hidden">
          <Image src={project.cover} alt={project.title} fill className="object-cover" />
        </div>
        <p className="mt-6 text-lg">{project.description}</p>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug) as Project;
  return { props: { project } };
};
