export function ProductCard({ price = 10 }: { price: number }) {
  const tax = price * 0.18;

  const logPrice = () => console.log(price)

  return (
    <div>
      <h3>Price: {price}</h3>
      <h2>Tax {tax}</h2>
      <button onClick={logPrice}>Log</button>
    </div>
  );
}
