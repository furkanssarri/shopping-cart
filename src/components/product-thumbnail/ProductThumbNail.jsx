import styles from "./productThumbNail.module.css";

const ProductThumbNail = ({ title, price, image, rating }) => {
  return (
    <>
      <div className={styles.productThumbNail}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
        <span>{rating}</span>
      </div>
    </>
  );
};

export default ProductThumbNail;
