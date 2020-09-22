import {
    ADD_TREATMENT,
    ADD_TREATMENT_SUCCESS,
    ADD_TREATMENT_ERROR,
    EDIT_PROFILE,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_ERROR,
    DELETE_PROFILE,
    DELETE_PROFILE_SUCCESS,
    DELETE_PROFILE_ERROR

} from '../actions'

const initialState = {
    email: '',
    password: '', 
    error: '',
    cramps: false,
    depression: false,
    eyePressure: false,
    fatigue: false,
    headache: false,
    headaches: false,
    inflammation: false,
    insomnia: false,
    lackOfAppetite: false,
    muscleSpasms: false,
    nausea: false,
    pain: false,
    seizures: false,
    spasticity: false,
    stress: false,
    isFetching: false, 
    savedStrains: [],
}

export const reducer = (state = initialState, action) => {
    console.log("ACTION FROM OUR REDUCER ===>", action);
    switch(action.type) {
        case ADD_TREATMENT: // to change
            return {
                ...state,
                isFetching: true,
                formSelections: [...state.formSelections, action.payload],
            }
        case ADD_TREATMENT_SUCCESS: // to change
            return {
                ...state,
                isFetching: false,
                formSelections: [...state.formSelections, action.payload]
            }
        case ADD_TREATMENT_ERROR: // to change
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }
        case EDIT_PROFILE: // to change
            return {
                ...state,
                isFetching: true,
                formSelections: [...state.formSelections, action.payload],
            }
        case EDIT_PROFILE_SUCCESS: // to change
            return {
                ...state,
                username: action.payload,
                password: action.payload,
                isFetching: false,
            }
        case EDIT_PROFILE_ERROR: // to change
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }
        case DELETE_PROFILE: // to change
            return {
                ...state,
                isFetching: true,
            }
        case DELETE_PROFILE_SUCCESS: // to change
            return {
                ...state,
                isFetching: false,
            }
        case DELETE_PROFILE_ERROR: // to change
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }
        default: 
            return state;
    }
}