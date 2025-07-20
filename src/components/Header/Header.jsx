import { useCart } from "../../contexts/useCart";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "./Logo";
import { useEffect } from "react";

const Header = () => {
  const { cart } = useCart();

  useEffect(() => {
    console.log(cart.length);
  }, [cart]);
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
                Cart{" "}
                {cart && cart.length > 0 ? (
                  <span className={styles.navCartAmount}>{cart.length}</span>
                ) : (
                  ""
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
