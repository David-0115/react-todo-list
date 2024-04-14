import { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css'

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const removeTodo = e => {
        const idx = e.target.dataset.index
        todos.splice(idx, 1)
        setTodos([...todos])
    }

    return (
        <div className="TodoList">
            <div className="spiral"></div>
            <NewTodoForm addTodo={addTodo} />
            <div className="Todo-items">
                {todos ? (
                    <ul>
                        {
                            todos.map((item, idx) => {
                                const key = uuid();
                                return (
                                    <Todo removeTodo={removeTodo} item={item.todo} key={key} index={idx} />
                                )

                            })
                        }
                    </ul>
                )

                    : ""}

            </div>
        </div >
    )
}

export default ToDoList;