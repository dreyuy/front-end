import React, { useState } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import Accordian from '@material-ui/core/Accordion';
import AccordianDetails from '@material-ui/core/AccordionDetails';
import AccordianSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button'
import { FormControlLabel, Typography } from '@material-ui/core';
import { ADD_TREATMENT } from '../store/actions'

const initialValues = [];

const TreatmentForm = (props) => {

    const [formValues, setFormValues] = useState(initialValues)

    // const submitHandler = (evt) => {
    //     evt.preventDefault;
    //     const {name, value} = evt.target;
    //     props.ADD_TREATMENT(formValues);
    // }

    return (
        <div className='treatment-form-div'>
            <h1>What do you want to treat?</h1>
            <form onSubmit={null} >

                <Accordian>
                    <AccordianSummary
                    aria-controls='list of symptoms'
                    id='accordian-symptoms-list'
                    >
                            <Typography>Gastrointestinal Symptoms</Typography>
                    </AccordianSummary>
                    
                    <AccordianDetails className='treatment-form'> 

                        <FormControlLabel
                        value='sleepy'
                        label='Sleepy'
                        labelPlacement='end'
                        control={
                            <Checkbox
                            className='form-input'
                            name='sleepy' // to make dynamic
                            type='checkbox'
                            check={null} // add state
                            value='newTitleText' // to make dynamic
                            onChange={null} // to add in click handler
                            color='secondary'
                            />} 
                        />

                    </AccordianDetails>
                </Accordian>


                <Button variant='contained' color='secondary' > Suggest Strains</Button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        formSelections: state.formSelections, 
    }
}

export default connect(mapStateToProps, {ADD_TREATMENT})(TreatmentForm);