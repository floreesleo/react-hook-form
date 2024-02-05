// eslint-disable-next-line react/prop-types
export default function Label({ children, ...props }) {
  return (
    <label className="block" {...props}>
      {children}
    </label>
  );
}
