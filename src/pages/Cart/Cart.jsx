import styles from "./cart.module.css";
import { useCart } from "../../contexts/useCart";
import { Link, Outlet } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useCart();

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Increase quantity
  const handleAdd = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  };

  // Decrease quantity (remove if quantity is 1)
  const handleRemove = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    );
  };

  // Remove item completely
  const handleRemoveItem = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id),
    );
  };

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
                    <button
                      className={styles.removeBtn}
                      onClick={() => handleRemoveItem(item)}
                      title="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className={styles.price}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.price}>Total: ${totalPrice}</p>
          <Link to={`/checkout`} className={styles.checkoutBtn}>
            Checkout
          </Link>
          <Outlet />
        </>
      ) : (
        <p className={styles.empty}>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
