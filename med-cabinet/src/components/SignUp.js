import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import * as yup from 'yup'
import schema from '../utilities/schema'

const defaultValues ={
    email: '',
    password: '',
    confirmPassword: '',
    
}

const defaultErrors = {
    email: '',
    password: '',
    confirmPassword: '',
    
}

const SignUp = () => {
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
          setValues({ ...values, [name]: value });
        };
      
        const onSubmit = (evt) => {
          evt.preventDefault();
          delete values.confirmPassword;
        };

    
    return (
       <form onSubmit={onSubmit}>
        <TextField 
        name='email'
        label='Email'
        variant='filled'
        onChange={onChange}
        value={values.email}
        /> <br/>
        <TextField
        name='password'
        variant='filled'
        type = 'Password'
        label= 'Password'
        required
        onChange={onChange}
        value={values.password}
      /> <br/>
      <TextField
        name='password'
        variant='filled'
        type = 'Password'
        required
        placeholder='Re-enter your password'
        onCharge={onChange}
        value={values.confirmPassword}
      /><br/>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2020-05-24"
            InputLabelProps={{
            shrink: true,
    }}
  />
      <Button variant="contained" color="primary">
  SIGN UP!
</Button>
       </form>
    )
}

export default SignUp
