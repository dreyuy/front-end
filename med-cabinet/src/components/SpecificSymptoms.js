import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import AccordianDetails from '@material-ui/core/AccordionDetails';
import { FormControlLabel } from '@material-ui/core';

const SpecificSymptoms = ({symptoms, formValues, checkHandler, theme}) => {
    

    return (
        <AccordianDetails className='treatment-form'> 

            <FormControlLabel
            label={symptoms}
            labelPlacement='end'
            control={
                <Checkbox
                className='form-input'
                type='checkbox'
                color='secondary'
                name={symptoms}
                checked={formValues.symptoms}
                onChange={checkHandler} 
                />} 
            />

        </AccordianDetails> 
    )
}

export default SpecificSymptoms;