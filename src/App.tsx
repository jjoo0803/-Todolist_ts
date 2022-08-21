import './App.css';
import TodoHeader from './components/TodoHeader'
// import TodoInput from './components/TodoInput'
import TodoListContainer from './components/TodoListContainer'

function App() {
  return (
    <div className="App">
      <TodoHeader />
      {/* <TodoInput /> */}
      <TodoListContainer />
    </div>
  );
}

export default App;
