import styles from "./shop.module.css";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div className={styles.container}>
      <h1>Some products</h1>
      <Outlet />
    </div>
  );
};

export default Shop;
