import * as React from 'react';
import Link from 'next/link';

const Page = (): JSX.Element => 
  <div>
    <h1>Index page</h1>
    <Link href="/notes"><a>Notes page</a></Link>
  </div>;

export default Page;