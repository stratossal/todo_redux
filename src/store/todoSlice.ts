import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type Todo = {
    id: number,
    text: string,
    completed: boolean,
}

const initialState: Todo[] = []

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<string>) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },
        deleteTodo:(state,action:PayloadAction<number>) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toggleTodo:(state,action:PayloadAction<number>) => {
            return state.map(todo => todo.id === action.payload
            ? {...todo,completed: !todo.completed} : todo)
        },
        clearAll: () => {
            return []
        },
        editTodo:(state,action:PayloadAction<{id: number, text: string }>) => {
            return state.map(todo => todo.id === action.payload.id
            ? {...todo, text: action.payload.text} : todo)
        }
    },
})


export const {addTodo,deleteTodo,toggleTodo,clearAll,editTodo} = todoSlice.actions
export default todoSlice.reducer