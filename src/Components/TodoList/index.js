import TodoItem from "../TodoItem";
import './index.css';

function TodoList({todoes, onDelete, onChange}) {
    return (
        <div>
        {
            todoes.map((todo) => {
                return (
                    <TodoItem key={todo.id}
                     todo={todo} 
                     onChange={onChange}
                     onDelete={onDelete} 
                     />
                )
            })
        }
        </div>
    )
}

export default TodoList;