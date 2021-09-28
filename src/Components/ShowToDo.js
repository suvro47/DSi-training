import { useContext } from "react";
import { Context } from "../Contexts/ContextHandler";

//css import
import "./todo.css"; // for same folder import

function ShowToDo({ setInput }) {
  const { todos, dispatch } = useContext(Context);

  function updateHandle(_id, _username, _password, _todo) {
    setInput({
      id: _id,
      username: _username,
      password: _password,
      todo: _todo,
    });
  }

  function deleteHandle(id) {
    dispatch({ type: "DELETE", payload: id });
    setInput({ id: -1, username: "", password: "", todo: "" });
  }

  return (
    <>
      {todos.map(({ id, username, password, todo }, index) => (
        <div className="todo" key={index}>
          <div className="details">
            <p className="username"> Username: {username} </p>
            <p> To-do : {todo} </p>
            <button
              className="btn update-btn"
              onClick={() => {
                updateHandle(id, username, password, todo);
              }}
            >
              Update
            </button>
            <button className="btn delete-btn" onClick={() => deleteHandle(id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShowToDo;
