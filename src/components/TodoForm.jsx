import React, { useState } from "react";
import PropTypes from "prop-types"

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    // mencegah default behavior submit form yaitu refresh
    e.preventDefault();

    if (!value) {
      alert("No blank todo!")
      return
      //kode apapun di bawah if tidak dijalankan, krn sudah return
    }
    
    addTodo(value)
    alert(value);
    setValue("");
  };

  // console.log("value ", value);

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
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm;
