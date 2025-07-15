import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.logo}>LOGO</div>
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
              About us
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
    </footer>
  );
};

export default Footer;
