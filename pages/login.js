import React from "react";
import Head from "next/head";
import s from "../styles/Home.module.scss";
import Link from "next/link";
import Header from "../components/Header";
import Button from "@mui/material/Button";

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
            <Button variant="contained" id="btnOn">Enter</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
