import './App.css';
import TodoHeader from './components/TodoHeader'
import TodoListContainer from './components/TodoListContainer'

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoListContainer />
    </div>
  );
}

export default App;
