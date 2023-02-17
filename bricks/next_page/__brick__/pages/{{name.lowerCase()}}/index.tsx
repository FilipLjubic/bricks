import { NextPage } from "next";
import Head from "next/head";
import {{name}} from "@components/{{name.lowerCase()}}/{{name}}";

const {{name}}Page: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>{{name}}</title>
        <meta
          name="description"
          content="{{name}} page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <{{name}} />
    </>
  );
};

export default {{name}}Page;
