import {ADD, CHANGE_COMPLETED, DELETE} from "../actions/task-list/action-types";
import {assign, mapValues, omit} from "lodash/object";

const initialState = {
    tasks: [1],
    taskById: {
        1: {
            id: 1,
            name: 'Дефолтная задача',
            completed: false,
        },
    }
};

export default function Tasks(state = initialState, action) {
    switch (action.type) {

        case ADD:
            const newId = state.tasks.length > 0 ? state.tasks[state.tasks.length - 1] + 1 : 1;
            return {
                tasks: state.tasks.concat(newId),
                taskById: {
                    ...state.taskById,
                    [newId]: {
                        id: newId,
                        name: action.name,
                        completed: false,
                    }
                }
            };

        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(id => id !== action.id),
                taskById: omit(state.taskById, action.id),
            };

        case CHANGE_COMPLETED:
            return {
                ...state,
                taskById: mapValues(state.taskById, task => {
                    return task.id === action.id ?
                        assign({}, task, { completed: !task.completed }) : task;
                })
            };

        default:
            return state;
    }
}