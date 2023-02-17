import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Desktop, WindowProvider } from '../components';

const Home: NextPage = () => {

  return (
    <div>
      <WindowProvider>
        <Desktop />
      </WindowProvider>
    </div>
  );
};

export default Home;

