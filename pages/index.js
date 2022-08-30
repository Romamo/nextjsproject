import Link from "next/link";
import Image from "next/future/image";
import s from "../styles/Home.module.scss";
import logo from "../public/images/logo.svg";
import vercel from "../public/vercel.svg";

export default function HomePage() {
  const navList = ["Item", "Item", "Item", "Item"];
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.header__wrapper}>
          <Image src={logo} alt="AppstoreSpy Logo" />
          <div className={s.header__nav}>
            {navList &&
              navList.map((item, index) => <li key={index}>{item}</li>)}
          </div>
          <div className={s.header__btns}>
            <button>Login</button>
          </div>
        </div>
      </header>
      <div className={s.wrapper}>
        <div className={s.title}>
          <h1>Welcome to Next.js!</h1>
          <Image src={vercel} />
        </div>
        <div className={s.main}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
