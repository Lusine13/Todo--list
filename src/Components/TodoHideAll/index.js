import './index.css';

function TodoHideAll({onHideCompleted}) {
    return (
        <div>
            <label className="hide-books">
                <input type="checkbox" onClick={onHideCompleted} />
                Hide all books
            </label>
        </div>
    )
}

export default TodoHideAll;