import React, { useEffect, useState } from "react";
import Link from "next/link";
import Style from "../styles/NavBar.module.scss";
import Image from "next/image";
import Logo from "../public/shop-solid.svg";
const NavBar = () => {
  const [toggle, setToggle] = useState(1);
  const [scroll, setScroll] = useState(false);

  const toggleTab = (index) => {
    setToggle(index);
  };

  const activeTap = (index) => {
    if (toggle === index) {
      return Style.active;
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, [scroll]);

  return (
    <>
      <nav className={!scroll ? Style.nav : Style.nav2}>
        <div className={Style.container}>
          <Image
            src={Logo}
            alt="Logo"
            width="40px"
            height="40px"
            objectFit="cover"
          />

          <ul>
            <li>
              <Link href="/">
                <a className={activeTap(1)} onClick={() => toggleTab(1)}>
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a className={activeTap(2)} onClick={() => toggleTab(2)}>
                  About
                </a>
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
