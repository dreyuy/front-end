import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// action types
export const ADD_TREATMENT = 'ADD_TREATMENT';
export const ADD_TREATMENT_SUCCESS = 'ADD_TREATMENT_SUCCESS';
export const ADD_TREATMENT_ERROR = 'ADD_TREATMENT_ERROR';

export const EDIT_PROFILE = 'EDIT_PROFILE'
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS'
export const EDIT_PROFILE_ERROR = 'EDIT_PROFILE_ERROR'

export const DELETE_PROFILE = 'DELETE_PROFILE'
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS'
export const DELETE_PROFILE_ERROR = 'DELETE_PROFILE_ERROR'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'


// url
const url = 'https://medswap.herokuapp.com/api/'

// action creators

// Login
export const loginUser = (info) => {
    console.log(info, "INFOOOOO")
    return (dispatch) => {
        dispatch({ type: LOGIN_USER});
        axiosWithAuth()
            .post('auth/login', info) // to update
            .then(res => {
                console.log(res, "<==== SUCCESSFUL LOGIN DATA");
                localStorage.setItem('token', res.data.token)
                window.location('/protected')
                dispatch({
                    type: LOGIN_USER_SUCCESS, 
                    payload: res.data.all
                })
            })
            .catch(err => {
                console.log(err, "<==== ERROR ON LOGIN")
                dispatch({
                    type: LOGIN_USER_ERROR,
                    payload: {
                        message: 'Cant return'
                    }
                })
            });
    }
}

// Register
export const registerUser = (info) => {
    console.log(info)
    return (dispatch) => {
        dispatch({ type: REGISTER_USER })
        axios
            .post(`${url}auth/register`, info)
            .then(res => {
                console.log(res, "<====REGISTER USER ACTION SUCCESS")
                dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err, '<====REGISTER USER ACTION FAILURE')
                dispatch({ type: REGISTER_USER_ERROR, payload: err })
            })
            .finally(() => {
                window.location = "http://www.google.com"; // to change
            })
    }
}

// Add Treatment Action
export const addTreatment = (info) => {
    return (dispatch) => {
        dispatch({ type: ADD_TREATMENT});
        axios
            // .post(`ailments/${id}`, info) // to update
            .then(res => {
                console.log(res);
                dispatch({
                    type: ADD_TREATMENT_SUCCESS, 
                    payload: res.data.all
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: ADD_TREATMENT_ERROR,
                    payload: {
                        message: 'Cant return'
                    }
                })
            });
    }
}

// Edit Profile Action
// export const editProfile = () => {
//     return (dispatch) => {
//         dispatch({ type: EDIT_PROFILE});
//         axios
//             .put('auth/', credentials)
//             .then(res => console.log(res))
//             .catch(err => console.log(err))
//     }
// }

// Delete Profile Action
export const deleteProfile = (user) => {
    console.log(user, "DELETE PROFILE ACTION")
    return (dispatch) => {
        dispatch({ type: DELETE_PROFILE});
        axios
            .put(`${url}auth/${user.id}`, user) // to update 
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}
