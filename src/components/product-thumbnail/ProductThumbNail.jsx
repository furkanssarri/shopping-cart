import { Link } from "react-router-dom";
import styles from "./productThumbNail.module.css";
import Button from "../Button/index";

const ProductThumbNail = ({ item }) => {
  return (
    <>
      <div className={styles.container}>
        <Link to={`/${item.id}`} state={{ item }}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </Link>
        <p>{item.price}$</p>
        <span>
          {item.rating.rate} / {item.rating.count}
        </span>
        <Button
          startIcon="local_grocery_store"
          variant="outline"
          color="primary"
        >
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ProductThumbNail;
