import React, { FC } from 'react';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Icon from '../../atoms/Icon/Icon';
import { theme } from '../../../theme/mainTheme';
import { Hr, Tile } from './styles';

interface IAccountTile {
  iconClassName: string,
  detail: string,
  value: string,
}

const AccountTile: FC<IAccountTile> = ({ iconClassName, detail, value }) =>

  <Tile>
    <Icon color={ theme.colors.primmary.color1 } className={ iconClassName } size={ 3 }/>
    <Paragraph>{ detail }</Paragraph>
    <Hr/>
    <Paragraph>{ value }</Paragraph>
  </Tile>


export default AccountTile;