import "./Button.scss";
import ExternalLink from "../Icons/ExternalLink";
import React from "react";

const Button = ({ href, target = "_self", type = "primary", children }) => {
  return (
    <a href={href} target={target} className={`button ${type}`}>
      {children}
      {target === "_blank" && (
        <ExternalLink
          className="end"
          color={type === "primary" ? "white" : "black"}
        />
      )}
    </a>
  );
};

export default Button;
