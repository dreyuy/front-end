import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import * as yup from 'yup' 

const defaultValues = {
    email: '',
    password: '',

}

const defaultErrors ={
    email: '',
    password: '',
}



const Login = () => {
    const [values, setValues] = useState(defaultValues)
    const [errors, setErrors] = useState(defaultErrors)

    return (
        <form>
            <TextField 
            name='email'
            variant='filled'
            type='email'
            />
            <TextField 
            name='password'
            variant='filled'
            type = 'password'
            />



        </form>
    )
}

export default Login
