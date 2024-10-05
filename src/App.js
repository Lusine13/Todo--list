import { useState } from "react";
import './App.css';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoHideAll from "./Components/TodoHideAll";

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
      <TodoList todoes={todoes} />
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
    </div>
  );
}

export default App;
