import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteProfile } from '../store/actions/treatmentFormActions';

const Profile = (props) => {
    const {email, password} = props;
    const [isClicked, setIsClick] = useState(false);
    const params = useParams();

    const clickHandler = (evt) => {
        evt.preventDefault();
    }

    const preventDelete = (evt) => {
        evt.preventDefault();
        setIsClick(true);
    }

    const finalDelete = (evt) => {
        evt.preventDefault();
        props.deleteProfile({email, password})
    }
    
    return (
        <>
        <div id={isClicked ? 'gray-out-background' : null}>
        <Card 
        className={isClicked ? 'profile-card gray' : 'profile-card'} 
        id={isClicked ? 'gray-out-background' : null}
        variant='outlined'>
            <CardMedia
            component='img'
            id={isClicked ? 'img-gray-out-background' : 'profile-img'}
            src={require('/Users/davidgold/Documents/lambdaSchool/projects/unit 3/build-week/front-end/med-cabinet/src/assets/Empty User.png')}
            />
            <div className='profile-credentials-div'>
                <h3>email: {email}</h3>
                <h3>password: {password}</h3>
                <div>
                    <span onClick={null} className='profile-adjustment-links'><EditIcon/><p>Edit Information</p></span>
                    <span onClick={preventDelete} className='profile-adjustment-links'><DeleteIcon color='secondary'/><p className='delete-profile-text'>Delete Account</p></span>
                </div>
            </div>
        </Card>
        {isClicked && <Card id='delete-are-you-sure'>
            Are you sure you want to delete your profile? 
            <span onClick={finalDelete}>Yes</span>
            <span onClick={() => setIsClick(false)}>No</span>
        </Card>}
        </div>
        </>

    )
}

const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password, 
    }
}

export default connect(mapStateToProps, {deleteProfile})(Profile);