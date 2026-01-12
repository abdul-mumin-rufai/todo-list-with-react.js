import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import { Todo_provider } from './Todo_Context.jsx';
import './App.scss';


function App() {

  return (
    <>
      <main>
        <Todo_provider>
          <Header appName="To-Do List with React" />
          <Home />
        </Todo_provider>
      </main>
    </>
  )
}

export default App
