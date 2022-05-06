const Button = ({
  children,
  style,
  title,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      style={{ padding: '10px', ...style }}
      onClick={onClick}>
      {title ? title : children}
    </button>
  );
};

export default Button;
