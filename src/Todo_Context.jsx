import { createContext, useContext, useReducer, useState, useEffect } from "react";
export const todo_context = createContext("")

const initialTodos = localStorage.getItem('todos') ?
    JSON.parse(localStorage.getItem('todos'))
    : [];


export function Todo_provider({ children }) {
    const [todos, dispatch] = useReducer(todos_reducer, initialTodos);

    const [modal_is_active, setModal_is_active] = useState(false);

    const [filter_by, setFilter_by] = useState('');

    function filtered_todos() {
        switch (filter_by) {
            case 'todo':
                return todos.filter(todo => !todo.isDone);
            case 'done':
                return todos.filter(todo => todo.isDone);
            default:
                return todos;
        }
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return (
        <>
            <main>
                <todo_context.Provider
                    value={
                        {
                            todos,
                            dispatch,
                            modal_is_active,
                            setModal_is_active,
                            filter_by,
                            setFilter_by,
                            filtered_todos
                        }
                    }>
                    {children}
                </todo_context.Provider>


            </main>
        </>
    )
}

export function use_todos() {
    return useContext(todo_context);
}

function todos_reducer(todos, action) {

    switch (action.type) {
        case "deleted": {
            if (confirm("Are you sure you wanna delete the todo?")) {
                return todos.filter(todo => todo.id !== action.id);
            } else {
                return todos;
            }
        }


        case "added": {
            let new_todo = action.new_todo;
            new_todo.id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
            return [...todos, new_todo];
        }

        case "toggled_is_done": {
            return (todos.map(todo => {
                if (todo.id === action.id) {
                    todo.isDone = !todo.isDone;
                    return todo;
                } else {
                    return todo;
                }
            }));
        }


    }


}