import React from 'react';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const Profile = () => {
    
    return (
        <Card className='profile-card'>
            <CardMedia
            component='img'
            id='profile-img'
            src={require('/Users/davidgold/Documents/lambdaSchool/projects/unit 3/build-week/front-end/med-cabinet/src/assets/power-moves (1).png')}
            />
            <div className='profile-credentials-div'>
                <h3>USERNAME: </h3>
                <h3>EMAIL: </h3>
                <EditIcon/>
            </div>
        </Card>
    )
}

export default Profile;