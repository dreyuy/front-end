import { withStyles } from '@material-ui/styles'
import React from 'react'
import FormContainer from './FormContainer'
import { Box } from '@material-ui/core'



const HomeWrapper = withStyles({
    root:{
        display: 'flex',
    }
})(Box)


const Home = () => {
    return (
        <div>
            <HomeWrapper>
            <FormContainer />
            </HomeWrapper>            
        </div>
    )
}


export default Home
