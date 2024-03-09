import { useState } from "react";

interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos = [
  {
    text: "Learn React",
    complete: false,
  },
  {
    text:"learn TypeScript",
    complete: false,
  },
];



const App = () => {


  const [todos, setTodos] = useState<Todo[]>(initialTodos);


  return (
    <div className="container">
      <h1>TooDo</h1>
      <form>
        <label htmlFor="todo">
          Todo
          <input type="text" id="todo" placeholder="ingrese todo"/>
          <button type="submit">Add todo</button>
        </label>
      </form>
    </div>
  )
}

export default App
