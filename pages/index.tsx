/** @jsxRuntime classic */
/** @jsx jsx */
import dynamic from 'next/dynamic';
import { jsx } from 'theme-ui';

const Browser = dynamic(() => import('src/components/browser'), { ssr: false });

type Props = {
  content: { title: string };
};

const MainPage = (props: Props): JSX.Element => (
  <div sx={{ height: 'calc(100vh - 60px)' }}>
    <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
      <h1 sx={{ fontSize: 8, my: 0 }}>{props.content.title}</h1>
      <Browser />
    </div>
  </div>
);

export function getStaticProps(): { props: Props } {
  return {
    props: { content: { title: 'This note app will wash your brain!' } },
  };
}

export default MainPage;
