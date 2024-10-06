function TodoHideAll({onHideCompleted}) {
    return (
        <div>
            <label>
                <input type="checkbox" onClick={onHideCompleted} />
                Hide all books
            </label>
        </div>
    )
}

export default TodoHideAll;