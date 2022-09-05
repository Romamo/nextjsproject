import React from "react";
import Head from "next/head";
import s from "../styles/Home.module.scss";
import Link from "next/link";
import Header from "../components/Header";

function Login() {
  return (
    <>
      <Head>
        <script src="/script.js" defer />
      </Head>
      <div className={s.page}>
        <Header />
        <div className={s.center}>
          <Link href="/test">
            <button id="btnOn">Enter</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
