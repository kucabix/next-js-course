import { NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc()
  .get((_req: any, res: NextApiResponse) => res.json({ message: 'ok' }))
  .post((_req: any, res: NextApiResponse) => res.json({ message: 'posted' }));

export default handler;
