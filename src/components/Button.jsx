import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color, align }) => {
  const className = [
    "header-btn",
    color === "green" && "main-green-color",
    color === "black" && "main-black-color",
    align === "left" && "align-left",
    align === "right" && "align-right"
  ].join(" ");
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "Black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["green", "black"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
