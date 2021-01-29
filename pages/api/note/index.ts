/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import notes from 'src/data/data';

const handler = nextConnect()
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const note = {
      ...req.body,
      id: Date.now(),
    };
    notes.push(note);
    res.json({ data: note });
  })
  .get((_req, res: NextApiResponse) => res.json({ data: notes }));
export default handler;
