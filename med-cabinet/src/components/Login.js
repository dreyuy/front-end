import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import * as yup from 'yup' 
import schema from '../utilities/schema'


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

    const validate = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then((valid) => {
            setErrors({ ...errors, [name]: "" });
          })
          .catch((err) => {
            setErrors({ ...errors, [name]: err.message });
          });
      };
    
      const onChange = (evt) => {
        const { name, value } = evt.target;
        validate(name, value);
        setValues({ ...values, [name]: value });
      };





    return (
        <form>
            <TextField 
            name='email'
            variant='filled'
            type='email'
            label='Email'
            />
            <TextField 
            name='password'
            variant='filled'
            type = 'Password'
            label='Password'
            />

            <Button 
            variant="contained" 
            color="primary">
                Login
            </Button>

        </form>
    )
}

export default Login
