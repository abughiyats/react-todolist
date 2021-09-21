import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      {/* <button className="header-btn main-green-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button> */}
      <Button
        text={showAdd ? "Finish" : "Add"}
        onClick={showAddToggle}
        color="green"
      />
      <h1 className="header-title">ReactJS Todo Lists</h1>
      <Button text={"Clear"} onClick={clearTodos} color="black" align="right" />
      {/* <button className="header-btn main-black-color" onClick={clearTodos}>
        Clear
      </button> */}
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
