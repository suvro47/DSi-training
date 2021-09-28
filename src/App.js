import { useState } from "react";
import UserList from "./Components/UserList";
import { ContextApi } from "./Contexts/ContextApi";

const dummyUser = [
  {
    id: 1,
    username: "x@dsi.com",
    password: "pass01",
    todo: "Learn JavaScript first",
  },
  {
    id: 2,
    username: "y@dsi.com",
    password: "pass01",
    todo: "Learn Java  first",
  },
];

function App() {
  const [stateUser, setStateUser] = useState(dummyUser);
  return (
    <div className="App">
      <ContextApi.Provider value={{ stateUser, setStateUser }}>
        <UserList />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
