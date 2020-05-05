import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import fetch from '../../libs/fetch';
import { Project } from '../../interfaces/project.interface';
import Layout from '../../components/layout';

interface ProjectProps {
  project: Project;
}

const ProjectPage: NextPage<ProjectProps> = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={`Portfolio template | ${project && project.name}`}>
      {project ? <p>project: {project.name}</p> : 'Loading...'}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: Project[] = await fetch('/getProjects');

  const paths = projects.map((project: Project) => ({
    params: { projectId: project.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project: Project = await fetch(`/getProject?projectId=${params?.projectId}`);
  return { props: { project } };
};

export default ProjectPage;
