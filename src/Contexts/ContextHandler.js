import { createContext, useReducer } from "react";
import AddToDo from "../Components/AddToDo";

export const Context = new createContext();

const iState = [];

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD":
      payload.id = state.length; // started from 0
      return [...state, payload];
    case "DELETE":
      const updated = state.filter((todo) => todo.id !== payload);
      // reset the id according to index
      for (let i = 0; i < updated.length; i++) {
        updated[i].id = i;
      }
      return updated;
    case "UPDATE":
      state[payload.id] = payload;
      return state;
    default:
      return state;
  }
}

export function ContextHandler() {
  const [todos, dispatch] = useReducer(reducer, iState);
  return (
    <div>
      <Context.Provider value={{ todos, dispatch }}>
        <AddToDo />
      </Context.Provider>
    </div>
  );
}
