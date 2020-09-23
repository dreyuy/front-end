import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CustomAccordian from './CustomAccordian';
import {addTreatment} from '../store/actions/treatmentFormActions';
import { FormControlLabel, List, Typography } from '@material-ui/core';

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

const TreatmentForm = ({ symptoms, addTreatment }) => {
    const [formValues, setFormValues] = useState(symptoms)

    useEffect(() => {
        console.log(formValues)
    }, [formValues])

    const submitHandler = (evt) => {
        evt.preventDefault();
        addTreatment(formValues);
    }

    const checkHandler = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    return (
        <List className='treatment-form-div' style={{maxHeight: '70%', overflow: 'auto'}}>
            <h3>What do you want to treat?</h3>
            <form >
                {themes.map((theme) => <CustomAccordian properties={theme.properties} name={theme.name} checkHandler={checkHandler} formValues={formValues} />)}
                <Button variant='contained' color='secondary' id='treatment-form-button' onClick={submitHandler}> Suggest Strains</Button>
            </form>
        </List>
    )
}

const mapStateToProps = state => {
    return {
        symptoms: state.symptoms,
        clickSymptoms: state.clickSymptoms, 
    }
}

export default connect(mapStateToProps, {addTreatment})(TreatmentForm);