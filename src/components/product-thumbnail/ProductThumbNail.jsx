import React from "react";

const ProductThumbNail = ({ title, price, description, image, rating }) => {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default ProductThumbNail;
