import { useState } from "react";


const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        todo: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit} className="NewTodoForm">
            <div>
                <label htmlFor="item" className="NewTodoForm-label" />
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    data-testid="todo"
                    value={formData.todo}
                    onChange={handleChange}
                    className="NewTodoForm-todo"
                />
            </div>
            <div>
                <button className="NewTodoForm-btn">Create Todo</button>
            </div>

        </form>
    )
}

export default NewTodoForm;