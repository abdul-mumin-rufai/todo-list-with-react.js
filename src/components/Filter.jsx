import { use_todos } from '../Todo_Context.jsx';
import './Todos.scss';

    
function Filter() {
    const store = use_todos();
    return (
    <>
        <div className="filters">
            <div>
                <p>Filter by state</p>
                    <div className="badges">
                        <div className={`badge ${store.filter_by === 'todo' ? 'selected' : ''}`}
                            onClick={()=>store.setFilter_by('todo')}>
                            To-Do
                        </div>
                    <div
                        className={`badge ${store.filter_by === 'done' ? 'selected' : ''}`}
                        onClick={() => store.setFilter_by('done')}>
                        Done
                    </div>
                        
                    {
                        store.filter_by &&     
                            <span className="clear"
                            onClick={() => store.setFilter_by('')}>
                            x clear
                        </span>
                    }
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter