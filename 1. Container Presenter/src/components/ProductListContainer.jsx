import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ProductListPresenter from "./ProductListPresenter";
const ProductListContainer = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return await res.json();
    },
  });
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [filter, setFilter] = useState("");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("clicking add to cart");
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const processedProducts = products
    ?.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase()))
    ?.sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      }
      return a.title.localeCompare(b.title);
    });
    
  return (
    <ProductListPresenter
      products={processedProducts}
      loading={isLoading}
      error={isError}
      cart={cart}
      onAddToCart={handleAddToCart}
      onSortChange={handleSortChange}
      onFilterChange={handleFilterChange}
    />
  );
};

export default ProductListContainer;
