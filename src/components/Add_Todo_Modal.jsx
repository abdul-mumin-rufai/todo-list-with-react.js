import { use_todos } from '../Todo_Context.jsx';

function AddTodoModal() {
    const store = use_todos();

    function add_task_handler() {
        let new_todo = { isDone: false }; 
        new_todo.title = document.querySelector("input[name=title]").value;
        new_todo.description = document.querySelector("textarea[name=description]").value;
        if (new_todo.title && new_todo.description) {
            store.dispatch({ type: "added", new_todo })
            store.setModal_is_active(false)
        } else {
            alert("Please enter both title and discription for the to-do");
        }
    }
    return (
        <>
            <div className="form">
                <h3>Add a new task</h3>
                <label htmlFor="title">Title *</label>
                <input type="text" name="title" placeholder="Enter a title..." /><br />
                <label htmlFor="description">Description *</label>
                <textarea name="description" rows="4" placeholder="Enter a description..." /><br />
                <button onClick={add_task_handler} className="btn gray">Add Task</button>
            </div>
        </>
    )
}

export default AddTodoModal
