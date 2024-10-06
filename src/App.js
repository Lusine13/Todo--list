import { useState } from "react";
import './App.css';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoHideAll from "./Components/TodoHideAll";
import TodoCompleted from "./Components/TodoCompleted";

function App() {

  const [todoes, setTodoes] = useState([
    {
      id: Math.random(),
      text: "Name of the wind",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "The Wise Man's Fear",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "The Master and the Margarita",
      isCompleted: false
    }    
  ]);
  return (
    <div className="App">
      <TodoList 
      todoes={todoes}
      onDelete={(todoes) => {
        setTodoes(todoes.filter((t) => t.id !==todoes.id));
      }} 
      onChange={(newTodo) => {
        setTodoes(todoes.map((todo) => {
          if(todo.id ===newTodo.id) {
            return newTodo;
          }
          return todo;
        }));
      }}
      />
      <TodoHideAll />
      <TodoForm onAdd={(text) => {
        setTodoes([
          ...todoes,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ]);
      }}/>
      <TodoCompleted />
    </div>
  );
}
        

export default App;
