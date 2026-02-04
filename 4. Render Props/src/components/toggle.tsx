import type React from "react";
import { useState } from "react";

const Toggle = ({
  render,
}: {
  render: (value: boolean, toggle: () => void) => React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => setIsOpen((prev) => !prev);

  return render(isOpen, toggle)
};

export default Toggle;
