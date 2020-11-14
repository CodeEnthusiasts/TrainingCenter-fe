import React, { FC } from 'react';
import Button from '../UniversalAccountButton';
import { Link, Span } from './styles';
import { theme } from '../../../theme/mainTheme';
import IProfileLink from '../../../__types__/IProfileLink';
import P from '../../atoms/P';
import Icon from '../../atoms/Icon';


const ProfileLink: FC<IProfileLink> = ({ content, iconClassName, path }) => 

    <Link to={ path }>
      <Button>
        <P>
          <Icon size={ 1.2 } className={ iconClassName } color={ theme.colors.secondary.color2 } />
          <Span>{ content ? content : path.replace(/-/g, ' ').slice(1) }</Span>
        </P>
      </Button>
    </Link>


export default ProfileLink;