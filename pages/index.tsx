import * as React from 'react';
import Link from 'next/link';
import 'src/styles.module.css';

const Page = (): JSX.Element => (
  <div>
    <h1 className="header">Index page</h1>
    <Link href="/notes">
      <a>Notes page</a>
    </Link>
  </div>
);

export default Page;
