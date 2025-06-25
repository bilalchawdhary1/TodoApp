import {Header} from "./components/Header";
import {Todo} from "./components/Todo";
import "./App.css";
function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='appWrapper'>
      <Header />
      <Todo />
      <footer>© {currentYear} Todo App</footer>
    </div>
  );
}

export default App;
