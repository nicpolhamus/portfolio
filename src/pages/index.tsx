import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { Desktop, PromotableZIndexProvider, WindowProvider } from '../components';

const getBrowserDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;

  console.log(`window dimensions: ${height}, ${width}`);

  return { height, width };
};

const Home: NextPage = () => {
  const [windowDimensions, setWindowDimensions] = useState<{ height: number; width: number }>({ height: 0, width: 0});

  const { height, width } = windowDimensions;

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getBrowserDimensions());
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <WindowProvider>
        <PromotableZIndexProvider>
          <Desktop height={height} width={width}/>
        </PromotableZIndexProvider>
      </WindowProvider>
    </>
  );
};

export default Home;

