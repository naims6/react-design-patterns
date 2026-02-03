import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
