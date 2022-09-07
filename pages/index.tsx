import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { WindowComponent } from '../components/core'
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <WindowComponent />
    </div>
  );
};

export default Home;

