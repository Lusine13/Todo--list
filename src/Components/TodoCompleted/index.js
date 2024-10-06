import './index.css';

function TodoCompleted({todoes, onClearCompleted}) {

   const completedSize = todoes.filter((todo) => todo.isCompleted).length;
    return (
        <div>
            <span className='completedCounting'>{completedSize}/{todoes.length} Completed</span>
            <button className="footer-button" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoCompleted;