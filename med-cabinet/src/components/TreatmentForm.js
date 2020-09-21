import React from 'react';

const TreatmentForm = () => {

    return (
        <div>
            <h1>What do you want to treat?</h1>
            <form onSubmit={null} >
                <input
                className='form-input'
                name='sleepy' // to make dynamic
                type='checkbox'
                value='newTitleText' // to make dynamic
                onChange={null} // to add in click handler
                />

                <input
                className='form-input'
                name='sleepy' // to make dynamic
                type='checkbox'
                value='newTitleText' // to make dynamic
                onChange={null} // to add in click handler
                />

                <button>Suggest Strains</button>
            </form>
        </div>
    )
}

export default TreatmentForm;