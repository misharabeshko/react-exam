import * as taskActions from "../taskReducer/actions";
import * as ProjectActions from "../projectReducer/actions";

const actions = {
    ...taskActions,
    ...ProjectActions

};

export default actions;