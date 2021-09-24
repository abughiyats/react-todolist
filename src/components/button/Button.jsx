import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./button.module.css";

const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "green" && "main-green-color",
  //   color === "black" && "main-black-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  const classNames = cx(styles.headerBtn, {
    [styles.mainBlackColor]: color === "black",
    [styles.mainGreenColor]: color === "green",
    [styles.alignLeft]: color === "left",
    [styles.alignRight]: color === "right"
  });

  return (
    <button className={classNames} onClick={onClick}>
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
