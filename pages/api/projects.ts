import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<any>): void => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
