import Todo from './Todo.jsx';
import { use_todos } from '../Todo_Context.jsx';


function TodosList() {
  const store = use_todos();

    return (
      <>
        <div className="todos">

          {store.filtered_todos().length ? store.filtered_todos().map(todo =>
            <Todo
              todo={todo}
              key={todo.id}
            />
          ) :'No to-dos to be displayed. Try clearing the filter or add new to-do.'
          }
            

        </div>
      </>
    )
  }

export default TodosList