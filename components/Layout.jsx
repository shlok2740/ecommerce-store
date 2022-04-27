import React from "react";
import Head from "next/head";
import { Navbar } from "./";
import { Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>SK store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
