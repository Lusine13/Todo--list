function TodoItem({todo}) {
    return (
        <div>
            <label>
                <input type="checkbox" />
                {todo.text}
                <button>delete</button>
            </label>
        </div>
    )
}

export default TodoItem;