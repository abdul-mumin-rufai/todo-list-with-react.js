import Filter from '../components/Filter.jsx';
import ModalWindow from '../components/modals/Modal_Window.jsx';
import TodosList from '../components/TodosList.jsx';
import AddTodoModal from '../components/Add_Todo_Modal.jsx';
import { use_todos } from '../Todo_Context.jsx';

function Home() {

    const store = use_todos();

    return (
    <>
            {store.modal_is_active && <ModalWindow>
                <AddTodoModal />
                </ModalWindow>}   
        
        <div className="container">
            <Filter />
        
            <TodosList />
        </div>
    </>
    )
  }
  export default Home
