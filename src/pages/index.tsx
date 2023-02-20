import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Desktop, PromotableZIndexProvider, WindowProvider } from '../components';

const Home: NextPage = () => {

  return (
    <div>
      <WindowProvider>
        <PromotableZIndexProvider>
          <Desktop />
        </PromotableZIndexProvider>
      </WindowProvider>
    </div>
  );
};

export default Home;

