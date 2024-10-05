import TodoItem from "./TodoItem";

function TodoList({todoes}) {
    return (
        <div>
        {
            todoes.map((todo) => {
                return (
                    <TodoItem key={todo.id} todo={todo} />
                )
            })
        }
        </div>
    )
}

export default TodoList;