import { useEffect } from "react";
import { useCart } from "../../contexts/useCart";

const Checkout = () => {
  const { setCart } = useCart();

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div>
      <h1>Order placed...</h1>
    </div>
  );
};

export default Checkout;
