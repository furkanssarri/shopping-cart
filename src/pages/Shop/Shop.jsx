import styles from "./shop.module.css";
import { Link, Outlet } from "react-router-dom";
import useData from "../../utils/useData";
import ProductThumbNail from "../../components/product-thumbnail/ProductThumbNail";
import { useCart } from "../../contexts/useCart";

const Shop = () => {
  const { data, error, isLoading } = useData(
    "https://fakestoreapi.com/products",
  );

  const { cart, setCart } = useCart();

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading data...</p>;

  return (
    <>
      <h1>Products</h1>
      <div className={styles.container}>
        {data &&
          data.map((item) => (
            <ProductThumbNail
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        <Outlet />
      </div>
    </>
  );
};

export default Shop;
