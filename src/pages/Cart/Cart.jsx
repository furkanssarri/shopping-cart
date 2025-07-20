import styles from "./cart.module.css";
import { useCart } from "../../contexts/useCart";
import { useEffect } from "react";

const Cart = () => {
  const { cart } = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className={styles.cartContainer}>
      {cart &&
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <span>Quantity: {item.quantity}</span>
            <p>Price: {item.price}</p>
          </div>
        ))}
    </div>
  );
};

export default Cart;
