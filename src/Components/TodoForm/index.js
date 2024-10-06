import { useState } from "react";
import './index.css';

function TodoForm({onAdd}) {
    const [text, setText] = useState("");
    return (
         <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input type="text" className="adding-input" value={text} placeholder="Add a book..." onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button className="adding-button">Add</button>
        </form>        
    )
}

export default TodoForm;