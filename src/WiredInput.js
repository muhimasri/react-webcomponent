import { createRef, useEffect } from "react";
import "wired-elements";

function WiredInput({ onChange }) {
  const inputRef = createRef();
  useEffect(() => {
    inputRef.current.addEventListener("input", (e) => {
      if (onChange) {
        onChange(e);
      }
    });
  }, [inputRef, onChange]);
  return <wired-input ref={inputRef}></wired-input>;
}

export default WiredInput;