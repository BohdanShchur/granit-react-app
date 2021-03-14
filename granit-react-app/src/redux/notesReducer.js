import * as ActionTypes from './types'

const intiionalState = {
    notes: []
}

export const notesReducer = (state = intiionalState, action )=>{
    switch(action.type){
       
        case ActionTypes.CREATE_NOTE:
            return { ...state, notes: state.notes.concat([action.payload]) }
        case ActionTypes.REMOVE_NOTE:
            return { ...state, notes: state.notes.filter(note => note.id !== action.payload)}
        case ActionTypes.COMPLETE_NOTE:
            return { ...state, notes: state.notes.map(note => { if(note.id === action.payload) { return {...note, completed:!note.completed }} return note})}
        default: 
            return state
    }
}