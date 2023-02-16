import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Desktop, WindowOutlet } from '../components';

const Home: NextPage = () => {

  return (
    <div>
      <Desktop />
      {/* need to set a window outlet here */}
      <WindowOutlet />
    </div>
  );
};

export default Home;

