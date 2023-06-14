import "./Button.scss";

const Button = ({ href, target = "_self", type = "primary", children }) => {
  return (
    <a href={href} target={target} className={`button ${type}`}>
      {children}
    </a>
  );
};

export default Button;
