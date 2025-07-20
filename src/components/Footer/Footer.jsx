import { useCart } from "../../contexts/useCart";
import style from "./footer.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Header/Logo";

const Footer = () => {
  const { cart } = useCart();
  return (
    <footer>
      <div className={`${style.logo} ${style.logo}`}>
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? `${style.active}` : ""}`
              }
              to={`/`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? `${style.active}` : ""}`
              }
              to={`about`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${style.navLink}  ${isActive ? `${style.active}` : ""}`
              }
              to={`shop`}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? `${style.active}` : ""}`
              }
              to={`cart`}
            >
              Cart
              {cart && cart.length > 0 ? (
                <span className={style.navCartAmount}>{cart.length}</span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
