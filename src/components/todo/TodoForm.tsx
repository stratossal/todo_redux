import {useState} from "react";

type TodoFormProps = {
    onAddTodo: (text:string) => void
}

export const TodoForm = ({onAddTodo}: TodoFormProps) => {
    const [text, setText] = useState("");

    return (
       <>
           <div className="mb-4 d-flex">
               <input
                   type="text"
                   className="form-control form-control-lg me-2"
                   placeholder="Write a todo..."
                   value={text}
                   onChange={(e) => setText(e.target.value)}
               />
               <button
                   className="btn btn-primary btn-lg"
                   onClick={() => {
                       if (text.trim() === "") return;
                       onAddTodo(text)
                       setText("")
                   }}
                   disabled={text.trim() === ""}
               >
                   <i className="bi bi-plus-lg fs-5"></i>
               </button>
           </div>

       </>
    )
}