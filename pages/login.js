import React from "react";
import Head from "next/head";
import Image from "next/future/image";
import s from "../styles/Home.module.scss";
import logo from "../public/images/logo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";

function Login() {
  const navList = ["Item", "Item", "Item", "Item"];
  const [state, SetState] = React.useState(null);
  const handleClick = (index) => {
    SetState(index);
  };
  return (
    <>
      <Head>
        <script src="/script.js" defer />
      </Head>
      <div className={s.page}>
        <header className={s.header}>
          <div className={s.header__wrapper}>
            <Image src={logo} alt="AppstoreSpy Logo" />
            <div className={s.header__nav}>
              {navList &&
                navList.map((item, index) => (
                  <li
                    className={state === index ? s.active : null}
                    onClick={() => handleClick(index)}
                    key={index}
                  >
                    {item}
                  </li>
                ))}
            </div>
            <div className={s.header__btns}>
              <Link href="/login">
                <Button id="btnBack" variant="outlined">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <div className={s.center}>
          <Link href="/test-full">
            <button id="btnOn">Enter</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
