const initprojectState = {
    projectList: [],
    projectsLoaded: false
};

export const ProjectReducer = (state = initprojectState, action) => {
    switch (action.type) {
        case "LOAD_PROJECTS":
            return { ...state, projectsLoaded: true, projectList: action.payload }

        case "ADD_PROJECT":
            return { ...state, projectList: action.payload }

        case "EDIT_PROJECT":
            return { ...state, projectList: action.payload }

        case "REMOVE_PROJECT":
            return { ...state, projectList: action.payload }
        default:
            return state;
    }
};