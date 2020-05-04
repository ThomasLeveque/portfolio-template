import React from 'react';
import { useRouter } from 'next/router';
import { NextPage, GetServerSideProps } from 'next';
import useSWR from 'swr';

import fetch from '../../libs/fetch';
import { CFUrl } from '../../libs/config';
import { Project } from '../../interfaces/project.interface';
import Layout from '../../components/layout';

interface ProjectProps {
  initialData: Project;
}

const ProjectPage: NextPage<ProjectProps> = ({ initialData }) => {
  const router = useRouter();
  const { projectId } = router.query;

  const { data } = useSWR<Project>(`/api/projects/${projectId}`, fetch, { initialData });

  return (
    <Layout title={`Portfolio template | ${data && data.name}`}>
      {data ? <p>project: {data.name}</p> : 'Loading...'}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { projectId } }) => {
  const data: Project = await fetch(`${CFUrl}/getProject?projectId=${projectId}`);
  return { props: { initialData: data } };
};

export default ProjectPage;
