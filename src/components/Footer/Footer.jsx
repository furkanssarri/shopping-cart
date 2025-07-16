import headerStyles from "../Header/header.module.css";
import footerStyles from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={`${footerStyles.logo} ${headerStyles.logo}`}>LOGO</div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                `$${headerStyles.navLink} ${
                  isActive ? `${headerStyles.active}` : ""
                }`
              }
              to={`/`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${footerStyles.navLink} ${headerStyles.navLink} ${
                  isActive ? `${headerStyles.active}` : ""
                }`
              }
              to={`about`}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${footerStyles.navLink} ${headerStyles.navLink} ${
                  isActive ? `${headerStyles.active}` : ""
                }`
              }
              to={`shop`}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${footerStyles.navLink} ${headerStyles.navLink} ${
                  isActive ? `${headerStyles.active}` : ""
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
