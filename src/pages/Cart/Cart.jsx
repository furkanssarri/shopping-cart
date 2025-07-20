import styles from "./cart.module.css";
import { useCart } from "../../contexts/useCart";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className={styles.cartContainer}>
      {cart &&
        cart.map((item, index) => (
          <div key={item.id || index}>{item.title}</div>
        ))}
    </div>
  );
};

export default Cart;
