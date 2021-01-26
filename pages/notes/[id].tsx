import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Note = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Note page</h1>
      <br />
      {`id: ${id as string}`}
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};

export default Note;
