import React from "react";
import Head from "next/head";

interface MetaProps {
  title?: string;
  favicon?: string;
}

const Meta: React.FC<MetaProps> = ({
  title = "Default Title",
  favicon = "/favicon.ico",
}) => {
  return (
    <Head>
      <title>Motorcycle Tourers Association | {title}</title>
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default Meta;
