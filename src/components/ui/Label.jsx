import { forwardRef } from "react";

//| En React forwardRef es una función que proporciona un medio para pasar un ref de un componente padre aun componente hijo. Se utiliza cuando se quiere que un componente, que normalmente no tiene acceso directo a un ref, pueda recibir uno del componente que lo utiliza.

// eslint-disable-next-line react/prop-types
const Label = forwardRef(function LabelComponent({ children, ...props }, ref) {
  return (
    <label className="block" ref={ref} {...props}>
      {children}
    </label>
  );
});

Label.displayName = "Label";

export default Label;
