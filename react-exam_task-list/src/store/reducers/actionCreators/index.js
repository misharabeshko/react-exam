import * as taskActions from "../taskReducer/actions";
import * as projectActions from "../projectReducer/actions";

const actions = {
    ...taskActions,
    ...projectActions

};

export default actions;