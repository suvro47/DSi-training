import { useContext } from "react";
import { ContextApi } from "../Contexts/ContextApi";

//css import
import "./userlist.css"; // for same folder import

function User({ setId, setUsername, setPassword, setTodo }) {
  const { stateUser, setStateUser } = useContext(ContextApi);

  function updateHandle(id, username, password, todo) {
    setId(id);
    setUsername(username);
    setPassword(password);
    setTodo(todo);
  }

  function deleteHandle(id) {
    const updatedList = stateUser.filter((user) => user.id !== id);
    // reset the id according to index
    for (let i = 0; i < updatedList.length; i++) {
      updatedList[i].id = i;
    }
    setStateUser(updatedList);
    setId(-1);
    setUsername("");
    setPassword("");
    setTodo("");
  }

  return (
    <>
      {stateUser.map(({ id, username, password, todo }, index) => (
        <div className="user" key={index}>
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

export default User;
