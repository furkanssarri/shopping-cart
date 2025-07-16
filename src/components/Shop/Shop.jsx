import styles from "./shop.module.css";
import { Link, Outlet } from "react-router-dom";
import useData from "../../utils/useData";
import { useEffect } from "react";
import ProductThumbNail from "../product-thumbnail/ProductThumbNail";

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
        {data &&
          data.map((item) => (
            <Link key={item.id} to={`/:${item.id}`}>
              <ProductThumbNail
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating.rate}
              />
            </Link>
          ))}
        <Outlet />
      </div>
    </>
  );
};

export default Shop;
