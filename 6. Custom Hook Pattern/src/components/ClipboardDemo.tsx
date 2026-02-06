import useClipboard from "../hooks/useClipboard";

function ClipboardDemo() {
  const {copy, copied} = useClipboard();

  return (
    <div>
      <button onClick={() => copy("Hello World Naim SOrker")}>
        {" "}
        {copied ? "Copied!" : "Copy Text"}
      </button>
    </div>
  );
}

export default ClipboardDemo;
