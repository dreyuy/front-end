import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import AccordianDetails from '@material-ui/core/AccordionDetails';
import { FormControlLabel } from '@material-ui/core';

const SpecificSymptoms = ({symptoms, formValues, checkHandler, theme}) => {
    const [isChecked, setIsChecked] = useState(false);

    const clickHandler = (evt) => {
        const {name, value} = evt.target;
        evt.preventDefault();
        setIsChecked(!isChecked);
        if (value === 'true') {
            checkHandler(name, true)
        } else {
            checkHandler(name, false)
        }
    }

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
                value={isChecked}
                checked={isChecked}
                onClick={clickHandler}
                />} 
            />

        </AccordianDetails> 
    )
}

export default SpecificSymptoms;