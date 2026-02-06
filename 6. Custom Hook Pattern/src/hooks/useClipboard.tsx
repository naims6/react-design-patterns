import { useState } from "react";

export default function useClipboard(): {
  copy: (text: string) => void;
  copied: boolean;
} {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return { copy, copied };
}
