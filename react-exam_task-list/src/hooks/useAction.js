import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import actions from "../store/reducers/actionCreators";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};