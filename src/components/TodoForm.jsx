import React, { useState } from "react";
import PropTypes from "prop-types"

// js convention
const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    // mencegah default behavior submit form yaitu refresh
    e.preventDefault();

    if (!value) {
      alert("No blank todo!")
      return
      //kode apapun di bawah if tidak dijalankan, krn sudah return
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!")
      setValue("")
      return
    }
    
    addTodo(value)
    alert(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="add">
        <form action="" className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-btn main-black-color">Add</button>
        </form>
      </section>
    );
  } else {
    return null
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
}

export default TodoForm;
