import React from "react";
import s from "../styles/Home.module.scss";

export const config = {
  unstable_runtimeJS: false,
};

function FourOhFour() {
  return (
    <div className={s.FourOhFour}>
      <div className={s.wrapper}>
        <div className={s.blur}></div>
        <h1>404</h1>
        <span>Opps! Page not found</span>
        <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <a href="/">BACK TO HOME</a>
      </div>
    </div>
  );
}

export default FourOhFour;
