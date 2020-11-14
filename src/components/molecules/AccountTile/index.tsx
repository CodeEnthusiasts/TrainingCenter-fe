import React, { FC } from 'react';
import P from '../../atoms/P';
import Icon from '../../atoms/Icon';
import IAccountTile from '../../../__types__/IAccountTile';
import { theme } from '../../../theme/mainTheme';
import { Tile, Hr } from './styles';

const AccountTile: FC<IAccountTile> = ({ iconClassName, detail, value }) => 

    <Tile>
      <Icon color={ theme.colors.primmary.color1 } className={ iconClassName } size={ 3 } />
      <P>{ detail }</P>
      <Hr />
      <P>{ value }</P>
    </Tile>


export default AccountTile;