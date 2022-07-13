import Head from "next/head";

import React, { FC, PropsWithChildren } from "react";
import Navbar from "../ui/Navbar";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const origin = (typeof window !== "undefined" && window.location.origin) || "";

const Layout: FC<Props> = ({ children, title }) => {


    

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Pablo Roman"></meta>
        <meta
          name="description"
          content={`Informacion del pokemon ${title}`}
        ></meta>
        <meta name="keywords" content={`${title},pokemon, pokedex `}></meta>
        <meta
          property={`Informacion del pokemon ${title}`}
        />
        <meta
          property={`Esta es la pagina sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
