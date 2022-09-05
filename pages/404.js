import React from "react";
import Link from "next/link";
import s from "../styles/Home.module.scss";
import Button from "@mui/material/Button";

function FourOhFour() {
  return (
    <div className={s.FourOhFour}>
      <div className={s.wrapper}>
        <div className={s.blur}></div>
        <h1>404</h1>
        <span>Opps! Page not found</span>
        <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/">
          <Button variant="contained">BACK TO HOME</Button>
        </Link>
      </div>
    </div>
  );
}

export default FourOhFour;
