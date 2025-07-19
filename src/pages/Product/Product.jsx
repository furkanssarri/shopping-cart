import { Link, useLocation } from "react-router-dom";
import styles from "./product.module.css";

const Product = () => {
  const { state } = useLocation();
  const item = state?.item;

  if (!item) return <p>No product data.</p>;
  return (
    <div className={styles.container}>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>Price: {item.price}</p>
      <p>
        Rating: {item.rating.rate} / {item.rating.count}
      </p>
      <p>{item.description}</p>

      <Link className={styles.redirect} to={`/shop/`}>
        Go Back
      </Link>
    </div>
  );
};

export default Product;
