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
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
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
