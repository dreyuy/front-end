import React from 'react'
import { Box } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import FormTabs from './FormTabs'

const FormWrapper = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
})(Box)




const FormContainer = () => {
    return (
        <div>
        <FormWrapper >
            <FormTabs />
            </FormWrapper>            
        </div>
    )
}

export default FormContainer
