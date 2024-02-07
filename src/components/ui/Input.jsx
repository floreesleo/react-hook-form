import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input className="w-full px-1" ref={ref} {...props} />;
});

Input.displayName = "Input";

export default Input;
