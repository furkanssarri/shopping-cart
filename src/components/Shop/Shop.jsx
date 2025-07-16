import styles from "./shop.module.css";
import { Link, Outlet } from "react-router-dom";
import useData from "../../utils/useData";
import { useEffect } from "react";
import ProductThumbNail from "../product-thumbnail/ProductThumbNail";

const Shop = () => {
  const { data, error, isLoading } = useData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading data...</p>;

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <Link to={`/:${item.id}`}>
                <ProductThumbNail
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating.rate}
                />
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Shop;
