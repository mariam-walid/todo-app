// import "./App.css";
// import React, { useState, useEffect } from "react";
// import Form from "./components/Form";
// import TodoList from "./components/TodoList";

// function App() {
//   const [input, setInput] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [filteredTodos, setFilteredTodos] = useState([]);

//   useEffect (()=>{
//     getLocalTodos()
//   },[]);
//   useEffect(() => {
//     filterHandler();
//     saveLocalTodos();
//   }, [todos, filter]);

//   const filterHandler = () => {
//     switch (filter) {
//       case "completed":
//         setFilteredTodos(todos.filter((todo) => todo.completed === true));
//         break;
//       case "uncompleted":
//         setFilteredTodos(todos.filter((todo) => todo.completed === false));
//         break;
//       default:
//         setFilteredTodos(todos);
//     }
//   };
//   const saveLocalTodos = () => {
//       localStorage.setItem('todos', JSON.stringify(todos))
//   }

//   const getLocalTodos = () => {
//     if(localStorage.getItem('todos') === null){
//       localStorage.setItem('todos', JSON.stringify([]))
//     }
//     else {
//       let localTodos = JSON.parse(localStorage.getItem('todos'))
//       console.log(localTodos)
//       setTodos(localTodos)
//     }
//   }

//   return (
//     <div className="App">
//       <header>
//         <h1>Mariam's Todo List</h1>
//       </header>
//       <Form
//         input={input}
//         setInput={setInput}
//         todos={todos}
//         setTodos={setTodos}
//         setFilter={setFilter}
//       />
//       <TodoList
//         filteredTodos={filteredTodos}
//         todos={todos}
//         setTodos={setTodos}
//       />
//     </div>
//   );
// }

// export default App;


import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
      <header>
        <h1>todo</h1>
      </header>
      <CreateTodo/>
      <TodoList/>
      </div>
      
    </div>
  );
}

export default App;