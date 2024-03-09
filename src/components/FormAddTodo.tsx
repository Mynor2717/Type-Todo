import { ChangeEvent, useState } from "react"

interface Props {
    addTodo: (text: string) => void;
}

export const FormAddTodo = ({ addTodo }: Props) => {

    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedText = text.trim();
        if (!trimmedText) return
        addTodo(trimmedText);
        setText("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">
                Todo
                <input type="text" id="todo"
                    placeholder="ingrese todo"
                    value={text}
                    onChange={handleChange} />
                <button type="submit">Add todo</button>
            </label>
        </form>
    )
}

export default FormAddTodo;