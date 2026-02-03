import React from "react";

const CartSummary = React.memo(({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  console.log("rendering cart summary");
  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Items: {cartItems.length}</p>
      <p>Total: ${total}</p>
    </div>
  );
});

export default CartSummary;
