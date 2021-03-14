import * as ActionTypes from './types'

export function createPost (note) {
    return{
        type: ActionTypes.CREATE_NOTE,
        payload: note
    }
}

export function fetchNote (note) {
    return {
        type: ActionTypes.FETCH_NOTE,
        payload: note
    }
}

export function removeNote (id) {
    return {
        type: ActionTypes.REMOVE_NOTE,
        payload: id
    }
}

export function completeNote (id) {
    return {
        type: ActionTypes.COMPLETE_NOTE,
        payload: id
    }
}