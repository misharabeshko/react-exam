import projectsData from "../../../data/projects.json";


export const loadProjects = () => (dispatch) => {
    try {
        dispatch({
            type: "LOAD_PROJECTS",
            payload: projectsData
        });
    } catch (error) {
        console.log("Error load project data: ", error);
    }
};

// export const addProject = (task) => (dispatch, getState) => {
//     const { taskList } = getState().taskReducer;
//     const newData = [...taskList, task];

//     dispatch({
//         type: "ADD_TASK",
//         payload: newData
//     });
// };


// export const editProject = (task) => (dispatch, getState) => {
//     const { taskList } = getState().taskReducer;

//     const updatedTaskList = taskList.map(t =>
//         t.id === task.id ? { ...t, ...task } : t
//     );

//     dispatch({
//         type: "EDIT_TASK",
//         payload: updatedTaskList
//     });
// };



// export const removeProject = (id, tasks) => (dispatch) => {
//     const newData = tasks.filter(t => t.id != id);

//     dispatch({
//         type: "REMOVE_TASK",
//         payload: newData
//     });
// };
