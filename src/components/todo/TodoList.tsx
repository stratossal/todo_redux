import { useState } from "react";
import { type Todo } from "../../store/todoSlice.ts";

type TodoListProps = {
    onDeleteTodo: (id: number) => void;
    todos: Todo[];
    onEditTodo: (id: number, text: string) => void;
    onToggleTodo: (id: number) => void;
};

export const TodoList = ({
                             onDeleteTodo,
                             todos,
                             onEditTodo,
                             onToggleTodo,
                         }: TodoListProps) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    return (
        <ul className="list-group list-group-flush mb-3">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center py-3"
                >
                    {editingId === todo.id ? (
                        <div className="d-flex flex-grow-1 me-2">
                            <input
                                type="text"
                                className="form-control me-2"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        onEditTodo(todo.id, editText);
                                        setEditingId(null);
                                    }
                                    if (e.key === "Escape") {
                                        setEditingId(null);
                                    }
                                }}
                                autoFocus
                            />
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => {
                                    onEditTodo(todo.id, editText);
                                    setEditingId(null);
                                }}
                            >
                                <i className="bi bi-check-lg"></i>
                            </button>
                        </div>
                    ) : (
                        <span
                            className={`flex-grow-1 fw-medium ${
                                todo.completed ? "text-decoration-line-through text-muted" : ""
                            }`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onToggleTodo(todo.id)}
                        >
              {todo.text}
            </span>
                    )}
                    {editingId !== todo.id && (
                        <div>
                            <button
                                className="btn btn-sm btn-outline-secondary me-2"
                                onClick={() => {
                                    setEditingId(todo.id);
                                    setEditText(todo.text);
                                }}
                            >
                                <i className="bi bi-pencil"></i>
                            </button>

                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => onDeleteTodo(todo.id)}
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};
