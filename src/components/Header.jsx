import { use_todos } from '../Todo_Context.jsx';

function Header({ appName }) {
    const store = use_todos();

    return (
      <>
        <div className="header">
            <div className="container">
                <div className="header-side">
                    <h1>
                        {appName}
                    </h1>
                </div>
                <div className="header-side">
                        <button onClick={()=> { store.setModal_is_active(true) }} className="btn secondary">+ Add To-Do</button>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Header