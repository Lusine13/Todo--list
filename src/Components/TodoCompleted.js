function TodoCompleted({todoes, onClearCompleted}) {

   const completedSize = todoes.filter((todo) => todo.isCompleted).length;
    return (
        <div>
            <span>{completedSize}/{todoes.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoCompleted;