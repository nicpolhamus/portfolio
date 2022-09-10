import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { WindowComponent } from '../components/common/window/window.component';

const Home: NextPage = () => {
  return (
    <div>
      <WindowComponent />
    </div>
  );
};

export default Home;

