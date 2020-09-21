import React, { useState } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel } from '@material-ui/core';
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
        <div>
            <h1>What do you want to treat?</h1>
            <form onSubmit={null} >
                <FormControlLabel
                control={
                    <Checkbox
                    className='form-input'
                    name='sleepy' // to make dynamic
                    type='checkbox'
                    check={null} // add state
                    value='newTitleText' // to make dynamic
                    onChange={null} // to add in click handler
                    />} 
                label='Test'    
                />

                <button>Suggest Strains</button>
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