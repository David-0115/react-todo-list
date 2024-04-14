import './Todo.css';

const Todo = ({ item, removeTodo, index }) => {
    return (
        <li>
            <div className="Todo-item">
                <i className="fa-regular fa-trash-can trash" onClick={removeTodo} data-index={index} data-testid="can"></i>
                <span className="Todo">{item}</span>
            </div>

        </li>
    )
}

export default Todo;