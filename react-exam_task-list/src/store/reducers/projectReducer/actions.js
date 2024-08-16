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

export const addProject = (project) => (dispatch, getState) => {
    const { projectList } = getState().projectReducer;
    const newData = [...projectList, project];

    dispatch({
        type: "ADD_PROJECT",
        payload: newData
    });
};


export const editProject = (project) => (dispatch, getState) => {
    const { projectList } = getState().projectReducer;

    const updatedProjectList = projectList.map(p =>
        p.id === project.id ? { ...p, ...project } : p
    );

    dispatch({
        type: "EDIT_PROJECT",
        payload: updatedProjectList
    });
};

export const removeProject = (projectId) => (dispatch, getState) => {
    const { projectList } = getState().projectReducer;

    const updatedProjects = projectList.filter(project => project.id !== projectId);

    dispatch({
        type: "REMOVE_PROJECT",
        payload: updatedProjects
    });
};
