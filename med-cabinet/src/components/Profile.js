import React from 'react';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

const Profile = (props) => {
    const {username, email} = props;
    
    return (
        <Card className='profile-card' variant='outlined'>
            <CardMedia
            component='img'
            id='profile-img'
            src={require('/Users/davidgold/Documents/lambdaSchool/projects/unit 3/build-week/front-end/med-cabinet/src/assets/power-moves (1).png')}
            />
            <div className='profile-credentials-div'>
                <h3>USERNAME: {username}</h3>
                <h3>EMAIL: {email}</h3>
                <div>
                    <EditIcon/><p>Edit Information</p>
                    <DeleteIcon/><p>Delete Account</p>
                </div>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username, 
        email: state.email,
    }
}

export default connect(mapStateToProps, {})(Profile);