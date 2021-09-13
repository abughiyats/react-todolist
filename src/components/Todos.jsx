import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar Hooks React"
    },
    {
      text: "Belajar React trus"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar Hooks React"
    },
    {
      text: "Belajar React trus"
    },
  ];

  return (
    <section className="todos">
      { todos.map( todo => {
        return <Todo text={todo.text} />
      } ) }
    </section>
  );
};

export default Todos;
