import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Desktop, PromotableZIndexProvider, WindowProvider } from '../components';
import { useBrowserDimensions } from '../hooks/use.browser.dimensions';

const getBrowserDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;

  return { height, width };
};

const Home: NextPage = () => {
  const [windowDimensions, setWindowDimensions] = useState(getBrowserDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getBrowserDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <WindowProvider>
        <PromotableZIndexProvider>
          <Desktop height={height} width={width}/>
        </PromotableZIndexProvider>
      </WindowProvider>
    </div>
  );
};

export default Home;

