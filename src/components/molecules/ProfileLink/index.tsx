import React, { FC } from 'react';
import { Link, Span } from './styles';
import { theme } from '../../../theme/mainTheme';
import IProfileLink from '../../../__types__/IProfileLink';
import P from '../../atoms/P';
import Icon from '../../atoms/Icon';


const ProfileLink: FC<IProfileLink> = ({ content, iconClassName, path }) => 

    <Link to={ path }>
      <P>
        <Icon size={ 1.2 } className={ iconClassName } color={ theme.color200 } />
        <Span>{ content ? content : path.replace(/-/g, ' ').slice(1) }</Span>
      </P>
      <Icon size={ 1 } className="fas fa-chevron-right" color={ theme.color200 } />
    </Link>


export default ProfileLink;