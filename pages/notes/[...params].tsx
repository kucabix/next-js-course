import React from 'react'
import { useRouter } from 'next/router';

const Note = (): JSX.Element => {

  const router = useRouter();
  const { params } = router.query

  return(<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <h1>Note page</h1>
    <br />{`params: ${params as string}`}
  </div>)
}

export default Note;