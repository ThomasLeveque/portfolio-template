import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import useSWR from 'swr';
import Link from 'next/link';

import fetch from '../libs/fetch';
import { Project } from '../interfaces/project.interface';
import { CFUrl } from '../libs/config';
import Layout from '../components/layout';

interface HomeProps {
  initialData: Project[];
}

const HomePage: NextPage<HomeProps> = ({ initialData }) => {
  const { data } = useSWR<Project[]>('/api/projects', fetch, { initialData });

  return (
    <Layout title="Portfolio template | Home">
      <main>
        <h1>Portfolio template</h1>

        <section>
          {data
            ? data.map((project: Project) => {
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
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data: Project[] = await fetch(`${CFUrl}/getProjects`);
  return { props: { initialData: data } };
};

export default HomePage;
