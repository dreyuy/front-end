import {
    ADD_TREATMENT,
    ADD_TREATMENT_SUCCESS,
    ADD_TREATMENT_ERROR
} from '../actions'

const initialState = {
    username: '',
    password: '', 
    savedStrains: [],
    formSelections: [],
    error: '',
    isFetching: false, 
}

export const reducer = (state = initialState, action) => {
    console.log(action, 'REDUCER CONSOLE')
    switch(action.type) {
        case ADD_TREATMENT: // to change
            return {
                // ...state,
                // movies: [...state.movies, action.payload]
            }
        case ADD_TREATMENT_SUCCESS: // to change
            return {
                // ...state,
                // movies: [...state.movies, action.payload]
            }
        case ADD_TREATMENT_ERROR: // to change
            return {
                // ...state,
                // movies: [...state.movies, action.payload]
            }
        default: 
            return state;
    }
}