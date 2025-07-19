import styles from "./shop.module.css";
import { Link, Outlet } from "react-router-dom";
import useData from "../../utils/useData";
import ProductThumbNail from "../../components/product-thumbnail/ProductThumbNail";

const Shop = () => {
  const { data, error, isLoading } = useData(
    "https://fakestoreapi.com/products",
  );

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading data...</p>;

  return (
    <>
      <h1>Products</h1>
      <div className={styles.container}>
        {data && data.map((item) => <ProductThumbNail item={item} />)}
        <Outlet />
      </div>
    </>
  );
};

export default Shop;
