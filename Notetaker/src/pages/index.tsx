import { type NextPage } from "next";
import Head from "next/head";

import { type RouterOutputs } from "~/utils/api";
import { Header } from "~/components/header";
import Content from "~/components/Content";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NoteTaker</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Content />
      </main>
    </>
  );
};

export default Home;

type Topic = RouterOutputs["topic"]["getAll"][0];
