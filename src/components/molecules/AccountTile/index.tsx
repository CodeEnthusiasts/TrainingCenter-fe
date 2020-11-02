import React, { FC } from 'react';
import P from '../../atoms/P';
import Icon from '../../atoms/Icon';
import IAccountTile from '../../../__types__/IAccountTile';
import { theme } from '../../../theme/mainTheme';
import { Tile, Hr } from './styles';

const AccountTile: FC<IAccountTile> = ({ iconClassName, detail, value }) => {


  return (
    <Tile>
      <Icon color={ theme.primmary } className={ iconClassName } size={ 3 } />
      <P>{ detail }</P>
      <Hr />
      <P>{ value }</P>
    </Tile>
  )
}

export default AccountTile;