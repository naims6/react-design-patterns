import React from "react";
import SortFilterControls from "./SortFilterControls";
import CartSummary from "./CartSummary";
import ProductCard from "./ProductCard";

const ProductListPresenter = ({
  products,
  cart,
  onAddToCart,
  onSortChange,
  onFilterChange,
  error,
  loading,
}) => {
  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  
  return (
    <div>
      <h1 className="text-3xl">Products</h1>
      <SortFilterControls
        onSortChange={onSortChange}
        onFilterChange={onFilterChange}
      />

      <CartSummary cartItems={cart} />

      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPresenter;
