import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

import { Project } from '../../interfaces/project.interface';
import { CFUrl } from '../../libs/config';

export default async (req: NextApiRequest, res: NextApiResponse<Project[]>): Promise<void> => {
  const resp = await fetch(`${CFUrl}/getProjects`);
  const data: Project[] = await resp.json();
  res.status(200).json(data);
};
