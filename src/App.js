import './App.css';
import TodosLogic from './components/TodosLogic';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TodosLogic />
    </div>
  );
}

export default App;
