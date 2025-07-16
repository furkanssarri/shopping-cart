import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header>
        <div className="mainLogo">
          <Logo />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  `${styles.navLink} ${
                    isActive ? styles.active : isPending ? styles.pendin : ""
                  }`
                }
                to={`/`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  `${styles.navLink} ${
                    isActive ? styles.active : isPending ? styles.pendin : ""
                  }`
                }
                to={`about`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  `${styles.navLink} ${
                    isActive ? styles.active : isPending ? styles.pendin : ""
                  }`
                }
                to={`shop`}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  `${styles.navLink} ${
                    isActive ? styles.active : isPending ? styles.pendin : ""
                  }`
                }
                to={`cart`}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
