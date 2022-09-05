import Image from "next/future/image";
import s from "../styles/Home.module.scss";
import vercel from "../public/vercel.svg";
import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export const config = {
  unstable_runtimeJS: false,
};

export default function Test({}) {
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
        <Header link />
        <div className={s.wrapper}>
          <div className={s.title}>
            <h1>Welcome to Next.js!</h1>
            <Image src={vercel} />
          </div>
          <div className={s.promo}>
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
      </div>
    </>
  );
}
