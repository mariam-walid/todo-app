import React, { useContext } from "react";
import { TodosContext } from "./Context";

const CreateTodo = () => {
  const [state, dispatch] = useContext(TodosContext);

  const isInputEmpty = state.input.trim() === "";
  return (
    <form className="inputForm">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={state.input}
        onChange={(e) => {
          dispatch({ type: "setInput", payload: e.target.value });
        }}
      />
      <button
        className="add"
        disabled={isInputEmpty}
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "submit" });
        }}
      >
        +
      </button>
    </form>
  );
};

export default CreateTodo;
