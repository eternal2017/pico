import {ADD, CHANGE_COMPLETED, DELETE} from "./action-types";

export function addTask (name) {
    return {
        type: ADD,
        name,
    }
}

export function deleteTask (id) {
    return {
        type: DELETE,
        id,
    }
}

export function changeCompletedForTask (id) {
    return {
        type: CHANGE_COMPLETED,
        id,
    }
}