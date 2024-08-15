const initTaskState = {
    taskList: [],
    tasksLoaded: false
};

export const TaskReducer = (state = initTaskState, action) => {
    switch (action.type) {
        case "LOAD_TASKS":
            return { ...state, tasksLoaded: true, taskList: action.payload }

        case "ADD_TASK":
            return { ...state, taskList: action.payload }

        case "EDIT_TASK":
            return { ...state, taskList: action.payload }

        case "REMOVE_TASK":
            return { ...state, taskList: action.payload }
        default:
            return state;
    }
};