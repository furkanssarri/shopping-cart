import styles from "./cart.module.css";
import { useCart } from "../../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.cartContainer}>
      {cartItems && cartItems.map((item) => <div>{item.name}</div>)}
    </div>
  );
};

export default Cart;
