// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  return (
    <button className="bg-emerald-800" {...props}>
      {children}
    </button>
  );
}
