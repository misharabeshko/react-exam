import { combineReducers } from "@reduxjs/toolkit"
import { TaskReducer } from "./taskReducer";


// редюсери
export const rootReducer = combineReducers({
    taskReducer: TaskReducer

});