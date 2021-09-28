import { useState, useContext } from "react";
import { ContextApi } from "../Contexts/ContextApi";
import User from "./User";

// css import
import "./userlist.css"; // for same folder import

function UserList() {
  const { stateUser, setStateUser } = useContext(ContextApi); // from global context
  const [id, setId] = useState(-1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [todo, setTodo] = useState("");

  function addHandler(e) {
    e.preventDefault();
    console.log("In Add handler : " + id + " " + username + " " + password);

    const newuser = {
      id,
      username,
      password,
      todo,
    };

    if (id >= 0) {
      console.log("To-do updated!");
      stateUser.splice(id, 1, newuser);
      setStateUser(stateUser);
    } else {
      console.log("To-do added");
      newuser.id = stateUser.length; // started from 0
      const alluser = [...stateUser, newuser];
      setStateUser(alluser);
    }
    setId(-1);
    setUsername("");
    setPassword("");
    setTodo("");
  }

  return (
    <>
      <section className="adduser">
        <form className="my-form" onSubmit={(e) => addHandler(e)} type="submit">
          <h3>Add New TO-DO</h3>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <textarea
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Describe To-do"
            required
          />
          <button className="btn submit">Submit</button>
        </form>
      </section>

      <section className="userlist">
        <User
          setId={setId}
          setUsername={setUsername}
          setPassword={setPassword}
          setTodo={setTodo}
        />
      </section>
    </>
  );
}

export default UserList;
