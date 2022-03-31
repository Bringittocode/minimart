import { combineReducers } from "redux";
import loader_state from "./loader/reducer";

const allStore = combineReducers({
    loader_state,
});

export default allStore;