import React, { useState } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import Accordian from '@material-ui/core/Accordion';
import AccordianDetails from '@material-ui/core/AccordionDetails';
import AccordianSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import { FormControlLabel, List, Typography } from '@material-ui/core';
import {addTreatment} from '../store/actions/treatmentFormActions'

const initialValues = {
    'pine': false,
    'relaxed': false,
    'flowery': false,
    'euphoric': false,
    'uplifted': false,
};

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
        <List className='treatment-form-div' style={{maxHeight: '80%', overflow: 'auto'}}>
            <h1>What do you want to treat?</h1>
            <form >

                <Accordian>
                    <AccordianSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='list of symptoms'
                    id='accordian-symptoms-list'
                    >
                            <Typography
                            className='accordian-title'
                            >Gastrointestinal Symptoms</Typography>
                    </AccordianSummary>
                    
                    <AccordianDetails className='treatment-form'> 

                        <FormControlLabel
                        label='pine'
                        labelPlacement='end'
                        control={
                            <Checkbox
                            className='form-input'
                            type='checkbox'
                            color='secondary'
                            name='pine'
                            checked={formValues.pine}
                            onChange={checkHandler} // to add in click handler
                            />} 
                        />

                    </AccordianDetails>
                </Accordian>


                <Button variant='contained' color='secondary' className='treatment-form-button' onClick={submitHandler}> Suggest Strains</Button>
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