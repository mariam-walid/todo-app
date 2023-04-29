import React, { useContext, useEffect } from "react";
import { TodosContext } from "./Context";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = () => {
  const [state, dispatch] = useContext(TodosContext);

  const uncompleted = state.todos.filter((todo) => todo.completed === false);

  const filterHandler = (filter) => {
    dispatch({ type: "setFilter", payload: filter ? filter : state.filter });
  };

  useEffect(() => {
    filterHandler(state.filter);
  }, [state.todos, state.filter]);

  return (
    <div className="todoList">
      <ul>
        {state.todos.length === 0 && <div className="empty">No Todos</div>}
        {state.filteredTodos.map((todo, index) => (
          <div
            className={`todo ${todo.completed ? "checked" : ""}`}
            key={index}
          >
            <div className="completeCheck">
              <input type="checkbox"></input>
              <span
                // className={todo.completed? 'checked' : ''}
                onClick={() => {
                  dispatch({ type: "complete", payload: todo.id });
                  console.log("comp");
                }}
              ></span>
            </div>
            <li>{todo.text}</li>
            <button
              className="delete"
              onClick={() => dispatch({ type: "delete", payload: todo.id })}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </ul>
      <div className="options">
        <p> {uncompleted.length} items Left</p>
        <div className="filters">
          <button
            className={state.filter === "all" ? "active" : ""}
            onClick={() => filterHandler("all")}
          >
            All
          </button>
          <button
            className={state.filter === "uncomplete" ? "active" : ""}
            onClick={() => filterHandler("uncomplete")}
          >
            Uncomplete
          </button>
          <button
            className={state.filter === "complete" ? "active" : ""}
            onClick={() => filterHandler("complete")}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
