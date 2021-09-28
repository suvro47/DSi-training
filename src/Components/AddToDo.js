import { useState, useContext } from "react";
import { Context } from "../Contexts/ContextHandler";
import ShowToDo from "./ShowToDo";

// css import
import "./todo.css"; // for same folder import

function AddToDo() {
  const { dispatch } = useContext(Context); // from global context
  const [input, setInput] = useState({
    id: -1,
    username: "",
    password: "",
    todo: "",
  });

  function addHandler(e) {
    e.preventDefault();
    const { id, username, password, todo } = input;
    const newtodo = {
      id,
      username,
      password,
      todo,
    };
    if (newtodo.id >= 0) {
      console.log("call update");
      dispatch({ type: "UPDATE", payload: newtodo });
    } else {
      dispatch({ type: "ADD", payload: newtodo });
    }
    setInput({ id: -1, username: "", password: "", todo: "" });
  }

  return (
    <>
      <section className="addtodo">
        <form className="my-form" onSubmit={(e) => addHandler(e)} type="submit">
          <h3>Add New TO-DO</h3>

          <input
            type="email"
            name="username"
            value={input.username}
            onChange={(e) => setInput({ ...input, username: e.target.value })}
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            placeholder="Enter Password"
            required
          />

          <textarea
            value={input.todo}
            name="todo"
            onChange={(e) => setInput({ ...input, todo: e.target.value })}
            placeholder="Describe To-do"
            required
          />
          <button className="btn submit">Submit</button>
        </form>
      </section>

      <section className="todolist">
        <ShowToDo setInput={setInput} />
      </section>
    </>
  );
}

export default AddToDo;
