/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { Note } from 'src/data/data';

export default function NotesPage({ notes }: { notes: Note[] }): JSX.Element {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>

      <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        {notes.map((note) => (
          <div sx={{ width: '33%', p: 2 }} key={note.id}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: { notes: Note[] } }> {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const data = await fetch(`${process.env.APP_URL}/api/note`)
    .then((res) => res.json())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    .then((res) => res.data);

  return {
    props: { notes: data },
  };
}
