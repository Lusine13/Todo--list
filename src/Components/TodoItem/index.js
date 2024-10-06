import './index.css';

function TodoItem({todo, onChange, onDelete}) {
    return (       
            <label>
                   <span className='todo-text'>
                <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }} />
           
              {todo.text}
              </span>  
                <button className="button" onClick={() => {
                    onDelete(todo);
                }}>delete</button>
            </label>       
    )
}

export default TodoItem;