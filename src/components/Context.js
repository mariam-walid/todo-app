import React, { createContext, useReducer } from "react";

export const TodosContext = createContext();

const initialState = {
  input: "",
  todos: [],
  filter: "all",
  filteredTodos: [],
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case "setInput": {
      return {
        ...state,
        input: action.payload,
      };
    }

    case "submit": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: state.input,
            completed: false,
            id: Math.random() * 1000,
          },
        ],
        input: "",
      };
    }

    case "delete": {
      const afterDelete = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: afterDelete,
      };
    }

    case "complete": {
      const afterComplete = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: afterComplete,
      };
    }

    case "setFilter": {
      

        switch (state.filter) {
            case "complete":
              state.filteredTodos = state.todos.filter((todo) => todo.completed === true);
              break;
            case "uncomplete":
              state.filteredTodos = state.todos.filter((todo) => todo.completed === false);
              break;
            default:
              state.filteredTodos = state.todos;
          }
        // const afterFilter = state.filter === "complete"
        //   ? state.todos.filter((todo) => todo.completed === true)
        //   :( state.filter === "uncomplete" ? state.todos.filter((todo) => todo.completed === false) :
        //   state.todos)


      return {
        ...state,
        filter : action.payload,
        
      };
    }

    default: {
      return state;
    }
  }
};

export const Todosprovider = ({ children }) => {
  const state = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={state}>{children}</TodosContext.Provider>
  );
};
