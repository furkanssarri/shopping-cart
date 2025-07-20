import styles from "./cart.module.css";
import { useCart } from "../../contexts/useCart";

const Cart = () => {
  const { cart } = useCart();

  // Dummy handlers for add/remove (replace with your logic)
  const handleAdd = (item) => {};
  const handleRemove = (item) => {};

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.heading}>Your Cart</h2>
      {cart && cart.length > 0 ? (
        <>
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li className={styles.cartItem} key={item.id}>
                <img
                  className={styles.image}
                  src={item.image}
                  alt={item.title}
                />
                <div className={styles.details}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.controls}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => handleRemove(item)}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => handleAdd(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.price}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <button className={styles.checkoutBtn}>Checkout</button>
        </>
      ) : (
        <p className={styles.empty}>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
