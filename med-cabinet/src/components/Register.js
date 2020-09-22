import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import * as yup from 'yup'
import schema from '../utils/schema'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const defaultValues ={
    email: '',
    password: '',
}

const defaultErrors = {
    email: '',
    password: '',    
}

const SignUp = () => {
    const [values, setValues] = useState(defaultValues)
    const [errors, setErrors] = useState(defaultErrors)
    const history = useHistory();
    
      
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
        console.log('SUBMITHANDLER')
        axios
            .post('https://medswap.herokuapp.com/api/auth/register', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(res => {
                setValues(defaultValues)
                // history.push('/TOEDITPAGE')
            });
    };
    
    return (
       <form>
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
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2020-05-24"
            InputLabelProps={{
            shrink: true,
            }}
            />

            <Button 
            onClick={onSubmit}
            variant="contained" 
            color="primary">
                SIGN UP!
            </Button>

       </form>
    )
}

export default SignUp
