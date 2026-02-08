import {TodoForm} from "./TodoForm.tsx";
import {TodoList} from "./TodoList.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import {addTodo, clearAll, deleteTodo, editTodo, toggleTodo} from "../../store/todoSlice.ts";
import {TodoStats} from "./TodoStats.tsx";

export const Todo = () => {
    const todos = useSelector((state:RootState)=> state.todos)
    const dispatch = useDispatch();

    const handleAddTodo = (text:string) => {
        dispatch(addTodo(text));
    }
    const handleRemoveTodo = (id: number) => {
        dispatch(deleteTodo(id));
    }
    const handleToggle = (id: number) => {
        dispatch(toggleTodo(id));
    }
    const handleEditTodo = (id: number, text:string) => {
        dispatch(editTodo({id, text}));
    }
    const handleClearTodo = () =>{
        dispatch(clearAll())
    }

    const totalTasks = todos.length
    const completedTasks = todos.filter(p => p.completed).length
    const activeTasks = totalTasks - completedTasks;

    return (
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">

                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4">
                                <h5 className="card-title mb-4 text-center fw-bold">
                                    <i className="bi bi-list-task me-2"></i>
                                    Task Manager
                                </h5>

                                <TodoForm onAddTodo={handleAddTodo} />

                                {todos.length > 0 ? (
                                    <>
                                        <TodoList
                                            todos={todos}
                                            onDeleteTodo={handleRemoveTodo}
                                            onEditTodo={handleEditTodo}
                                            onToggleTodo={handleToggle}
                                        />

                                        <TodoStats
                                            total={totalTasks}
                                            completed={completedTasks}
                                            active={activeTasks}
                                        />

                                        <div className="d-grid mt-4">
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger btn-lg"
                                                onClick={handleClearTodo}
                                                disabled={todos.length === 0}
                                            >
                                                <i className="bi bi-trash3 me-2"></i>
                                                Clear All
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-4">
                                        <i className="bi bi-card-checklist text-muted" style={{fontSize: "3rem", opacity: "0.3"}}></i>
                                        <p className="text-muted mt-2 mb-0">No tasks yet. Add one above!</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-3 text-center">
                            <small className="text-muted">
                                Click on task to toggle
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}