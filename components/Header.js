import React from "react";
import Image from "next/future/image";
import s from "../styles/Home.module.scss";
import logo from "../public/images/logo.svg";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Menu,
} from "@mui/material";

function Header({ bothBtns, link }) {
  const navLi = ["Overview", "Features", "Plans", "Pricing"];
  const navList = ["Item", "Item", "Item", "Item"];
  const [state, SetState] = React.useState(null);
  const handleClick = (index) => {
    SetState(index);
  };
  const matches1025 = useMediaQuery("(min-width:1025px)");
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      {matches1025 ? (
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
      ) : (
        <div className={s.header}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: -1.5 }}
                onClick={toggleDrawer}
              >
                <Menu />
              </IconButton>

              <Image src={logo} alt="logo" width={114} />

              <Button variant="contained">Sign in</Button>
            </Toolbar>
            <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer}>
              <List
                sx={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                {navLi.map((item, index) => (
                  <ListItemButton
                    sx={{
                      width: "100%",
                    }}
                    key={index}
                  >
                    <ListItemText key={index}>
                      <Link
                        key={index}
                        href={"#Mob" + item}
                        onClick={toggleDrawer}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Roboto",
                            textAlign: "center",
                            fontSize: "25px",
                          }}
                        >
                          {item}
                        </Typography>
                      </Link>
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </AppBar>
        </div>
      )}
    </>
  );
}

export default Header;
