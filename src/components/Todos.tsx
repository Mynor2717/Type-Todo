import { Todo } from "../App";

interface Props {
    todos: Todo[];
    toggleTodo: (selectedTodo: Todo) => void;
    removeTodo: (selectedTodo: Todo) => void;
}

const Todos = ({ todos, toggleTodo, removeTodo }: Props) => {
    return (
        <>


            {todos.map((todo) => (
                <article key={todo.text} >
                    <label htmlFor="todo">
                        <input type="checkbox"
                            checked={todo.complete}
                            id="todo"
                            onChange={() => toggleTodo(todo)} />
                        {todo.text}
                    </label>
                    <button onClick={() => removeTodo(todo)} type="button">
                        Remove
                    </button>
                </article>
            ))}



        </>
    )
}

export default Todos

