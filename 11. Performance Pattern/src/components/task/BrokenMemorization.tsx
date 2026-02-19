import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

export default function BrokenMemorization() {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("Child Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment {count}</button>{" "}
      <br />
      <Child onClick={handleClick} />
    </>
  );
}

