import { Link } from "react-router-dom";
import styles from "./productThumbNail.module.css";
import Button from "../Button/index";

const ProductThumbNail = ({ id, title, price, image, rating }) => {
  return (
    <>
      <div className={styles.container}>
        <Link to={`/${id}`}>
          <img src={image} alt={title} />
          <p>{title}</p>
        </Link>
        <p>{price}$</p>
        <span>
          {rating.rate} / {rating.count}
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
