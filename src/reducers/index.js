import {combineReducers} from "redux";
import Tasks from './tasks-reducer';

const allRreducers = combineReducers({
    tasks: Tasks,
});

export default allRreducers;