import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CustomAccordian from './CustomAccordian';
import {addTreatment} from '../store/actions/treatmentFormActions';
import { FormControlLabel, List, Typography } from '@material-ui/core';

const initialValues = {
    'cramps': false,
    'depression': false,
    'eye pressure': false,
    'fatigue': false,
    'headache': false,
    'headaches': false,
    'inflammation': false,
    'insomnia': false,
    'lack of appetite': false,
    'muscle spasms': false,
    'nausea': false,
    'pain': false,
    'seizures': false,
    'spasticity': false,
    'stress': false,
};

// object of array to help properly sort the accordian lists
const themes = [ {
    name: 'Physical',
    properties: ['fatigue', 'headache', 'headaches', 'inflammation', 'seizures', 'eye pressure', 'nausea', 'lack of appetite']
    }, 
    {
    name: 'Muscle Pain',
    properties: ['cramps', 'pain', 'spasticity', 'muscle spasms']
   },
   {
    name: 'Mental',
    properties: ['stress', 'insomnia', 'depression']
  },
];

const TreatmentForm = (props) => {

    const [formValues, setFormValues] = useState(initialValues)

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(formValues);
        props.addTreatment(formValues);
    }

    const checkHandler = (evt) => {
        evt.preventDefault();
        const {name, checked} = evt.target;
        setFormValues({
            ...formValues,
            [name]: checked,
        })
    }


    return (
        <List className='treatment-form-div' style={{maxHeight: '70%', overflow: 'auto'}}>
            <h3>What do you want to treat?</h3>
            <form >
                {themes.map((theme) => <CustomAccordian properties={theme.properties} name={theme.name} checkHandler={checkHandler} formValues={formValues}/>)}
                <Button variant='contained' color='secondary' id='treatment-form-button' onClick={submitHandler}> Suggest Strains</Button>
            </form>
        </List>
    )
}

const mapStateToProps = state => {
    return {
        formSelections: state.formSelections, 
    }
}

export default connect(mapStateToProps, {addTreatment})(TreatmentForm);