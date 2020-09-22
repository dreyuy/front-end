import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core'
import * as yup from 'yup' 
import schema from '../utils/schema'
import {loginUser} from '../store/actions/treatmentFormActions';
import { connect } from 'react-redux';

const defaultValues = {
    email: '',
    password: '',

}

const defaultErrors ={
    email: '',
    password: '',
}

const Login = ({loginUser}) => {
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
        evt.preventDefault();
        const { name, value } = evt.target;
        setValues({ ...values, [name]: value });
      };

      const loginHandler = (evt) => {
          evt.preventDefault();
          loginUser(values);
      }

    return (
        <form>
            <TextField 
            name='email'
            variant='filled'
            type='email'
            label='Email'
            value={values.email}
            onChange={onChange}
            />
            <TextField 
            name='password'
            variant='filled'
            type = 'Password'
            label='Password'
            value={values.password}
            onChange={onChange}
            />

            <Button 
            onClick={loginHandler}
            variant="contained" 
            color="primary">
                Login
            </Button>

        </form>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {loginUser})(Login);
