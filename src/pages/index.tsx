import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

import fetch from '../libs/fetch';
import { Project } from '../interfaces/project.interface';
import Layout from '../components/layout';

interface HomeProps {
  projects: Project[];
}

const HomePage: NextPage<HomeProps> = ({ projects }) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Layout title="Portfolio template | Home">
        <main>
          <h1>Portfolio template</h1>

          <section>
            {projects
              ? projects.map((project: Project) => {
                  return (
                    <article key={project.id}>
                      <Link href="/projects/[projectId]" as={`/projects/${project.id}`}>
                        <a>{project.id}</a>
                      </Link>
                      <h2>{project.name}</h2>
                      <h4>{project.desc}</h4>
                    </article>
                  );
                })
              : 'Loading...'}
          </section>
        </main>

        <style jsx>{``}</style>
      </Layout>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = await fetch(`/getProjects`);
  return { props: { projects } };
};

export default HomePage;
