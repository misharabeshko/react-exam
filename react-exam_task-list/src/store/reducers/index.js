import { combineReducers } from "@reduxjs/toolkit"
import { TaskReducer } from "./taskReducer";
import { ProjectReducer } from "./projectReducer";

// редюсери
export const rootReducer = combineReducers({
    taskReducer: TaskReducer,
    projectReducer: ProjectReducer
});