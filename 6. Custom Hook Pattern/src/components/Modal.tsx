import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

function Modal() {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Box</button>

      {open && (
        <div
          ref={ref}
          style={{
            border: "1px solid black",
            padding: 20,
            marginTop: 10,
          }}
        >
          Click outside me to close
        </div>
      )}
    </div>
  );
}

export default Modal;
