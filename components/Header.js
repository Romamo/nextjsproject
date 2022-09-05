import React from "react";
import Image from "next/future/image";
import s from "../styles/Home.module.scss";
import logo from "../public/images/logo.svg";
import Link from "next/link";
import { Button } from "@mui/material";

function Header({ bothBtns, link }) {
  const navList = ["Overview", "Features", "Plans", "Pricing"];
  const [state, SetState] = React.useState(null);
  const handleClick = (index) => {
    SetState(index);
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.header__wrapper}>
          <Link href="/">
            <Image src={logo} alt="AppstoreSpy Logo" />
          </Link>
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
            {bothBtns ? (
              <>
                <Link href="/test">
                  <button id="btnOn" data-boolean="true">
                    JS On
                  </button>
                </Link>
                <Link href="/test">
                  <Button id="btnOff" variant="contained">
                    JS Off
                  </Button>
                </Link>
              </>
            ) : link ? (
              <>
                <Button href="/login" id="btnOn" variant="outlined">
                  Login
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button id="btnOn" variant="outlined">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
