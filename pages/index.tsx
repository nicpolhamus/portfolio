import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SystemWindowComponent } from '../components';


import { WindowComponent } from '../components/common/window/window.component';

const Home: NextPage = () => {
  return (
    <div>
      <SystemWindowComponent />
    </div>
  );
};

export default Home;

