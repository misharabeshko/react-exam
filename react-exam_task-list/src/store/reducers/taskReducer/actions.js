import tasksData from "../../../data/tasks.json";

export const loadTasks = () => (dispatch) => {
    try {
        dispatch({
            type: "LOAD_TASKS",
            payload: tasksData
        });
    } catch (error) {
        console.log("Error load task data: ", error);
    }
};

export const addTask = (task) => (dispatch, getState) => {
    const { taskList } = getState().taskReducer;
    const newData = [...taskList, task];

    dispatch({
        type: "ADD_TASK",
        payload: newData
    });
};


export const editTask = (task) => (dispatch, getState) => {
    const { taskList } = getState().taskReducer;

    const updatedTaskList = taskList.map(t =>
        t.id === task.id ? { ...t, ...task } : t
    );

    dispatch({
        type: "EDIT_TASK",
        payload: updatedTaskList
    });
};



export const removeTask = (id) => (dispatch, getState) => {
    const { taskList } = getState().taskReducer;
    const newData = taskList.filter(t => t.id != id);

    dispatch({
        type: "REMOVE_TASK",
        payload: newData
    });
};
