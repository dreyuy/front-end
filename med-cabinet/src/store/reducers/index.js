const initialState = {

}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MOVIE: // to change
            return {
                // ...state,
                // movies: [...state.movies, action.payload]
            }
        default: 
            return state;
    }
}