import React, { FC } from 'react';
import Button from '../UniversalAccountButton';
import { Link, Span } from './styles';
import { theme } from '../../../theme/mainTheme';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Icon from '../../atoms/Icon/Icon';
import { RoutePaths } from '../../../routes';

interface IProfileLink {
  path: RoutePaths,
  iconClassName: string,
  content?: string,
  additionalFunction?: () => void,
}

const ProfileLink: FC<IProfileLink> = ({ content, iconClassName, path, additionalFunction }) =>

  <Link to={ path } onClick={ additionalFunction && additionalFunction }>
    <Button>
      <Paragraph>
        <Icon size={ 1.2 } className={ iconClassName } color={ theme.colors.secondary.color2 }/>
        <Span>{ content ? content : path.replace(/-/g, ' ').slice(1) }</Span>
      </Paragraph>
    </Button>
  </Link>


export default ProfileLink;