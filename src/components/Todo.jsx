import { use_todos } from '../Todo_Context.jsx';
import './Todos.scss';


function Todo({ todo }) {
    const store = use_todos();
  return (
    <>
        <div className={`todo ${todo.isDone ? 'done' : ''}`}>
              <button onClick={() => store.dispatch({
                  type: "deleted",
                  id: todo.id
                })}
                  className="erase"
              >
                  x erase
                  
            </button>
            <h3>
                {todo.title}
            </h3>
            <p>
                {todo.description}
            </p>
            <div className="task-check">
                  <input onClick={() => store.dispatch({
                      type: "toggled_is_done",
                      id: todo.id
                    })}
                      type="checkbox"
                      defaultChecked={todo.isDone}
                  />
                <label>
                    {!todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo