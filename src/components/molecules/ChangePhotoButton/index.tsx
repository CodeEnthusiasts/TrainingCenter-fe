import React from 'react';
import ProfileImage from '../../atoms/ProfileImage';
import userImg from '../../../exampleImg.jpg';
import { Button, Div } from './styles';
import Icon from '../../atoms/Icon';
import { theme } from '../../../theme/mainTheme';

const ChangePhotoButton = () => {
  return (
    <Button>
      <Div>
        <Icon color={ theme.colors.secondary.color2 } className="fas fa-camera" size={ 3 } /> 
      </Div>
      <ProfileImage size="150px" src={ userImg } alt="" />
    </Button>
  )
}

export default ChangePhotoButton;