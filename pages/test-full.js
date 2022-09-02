import Image from "next/future/image";
import s from "../styles/Home.module.scss";
import logo from "../public/images/logo.svg";
import vercel from "../public/vercel.svg";
import React from "react";
import Button from "@mui/material/Button";
import Head from "next/head";
import Link from "next/link";

export default function TestFull({}) {
  const navList = ["Item", "Item", "Item", "Item"];
  const [state, SetState] = React.useState(null);
  const handleClick = (index) => {
    SetState(index);
  };
  const divList = [" ", " ", " ", " ", " ", " ", " ", " "];
  const [rotate, SetRotate] = React.useState(null);
  const handleRotate = (index) => {
    SetRotate(index);
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
        <div className={s.wrapper}>
          <div className={s.title}>
            <h1>Welcome to Next.js!</h1>
            <Image src={vercel} />
          </div>
          <div className={s.main}>
            {divList &&
              divList.map((item, index) => (
                <div
                  className={rotate === index ? s.rotate : null}
                  onClick={() => handleRotate(index)}
                  key={index}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
