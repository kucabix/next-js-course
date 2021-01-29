/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Note } from 'src/data/data';
import { Params } from 'next/dist/next-server/server/router';
import { NextApiRequest, NextApiResponse } from 'next';

export default function NotePage({ note }: { note: Note }): JSX.Element {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note: {note.title} </h1>
      <h2>Note id: {note.id}</h2>
    </div>
  );
}

export async function getServerSideProps({
  params,
  res,
}: {
  params: Params;
  req: NextApiRequest;
  res: NextApiResponse;
}): Promise<{ props: { note: Note } }> {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const response = await fetch(`${process.env.APP_URL}/api/note/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' });
    res.end();
    return {
      props: { note: ([] as unknown) as Note },
    };
  }

  const { data } = await response.json();
  return {
    props: { note: data },
  };
}
