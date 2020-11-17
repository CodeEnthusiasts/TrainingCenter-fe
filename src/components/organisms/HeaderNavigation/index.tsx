import React, {FC} from 'react'
import { theme } from '../../../theme/mainTheme'
import { HeaderWrapper, HeaderLink} from './styles'
import { IHeaderNavigation } from '../../../__types__/IHeaderNavigation'
import { useHistory } from "react-router-dom";
import Button from '../../atoms/Button'
import H1 from '../../atoms/H1'
import Icon from '../../atoms/Icon'
import Routes from '../../../routes/'

const getRouteData = (path:string) => {
  const Data = Routes.filter((element) => {
    return element.path === path
  })
  return Data[0];
}

const HeaderNavigation:FC<IHeaderNavigation> = ({title, buttons}) => {
  let history = useHistory();

  const HeaderButtons = [
    {
      id: '1',
      name: 'Back',
      icon: "fas fa-long-arrow-alt-left",
      action: () => history.goBack()
    },
    {
      id: '2',
      name: 'Menu',
      icon: "fas fa-bars",
      linkTo: '/settings',
      action: () => console.log("Moving to menu"),
    },
    {
      id: '3',
      name: 'Confirm',
      linkTo: '/',
      icon: "fas fa-check",
      action: () => console.log("Accept changes"),
    },
    {
      id: '4',
      name: 'Add',
      linkTo: '/',
      icon: "fas fa-plus",
      action: () => console.log("Add element"),
    },
    {
      id: '5',
      name: 'Edit',
      linkTo: '/',
      icon: "fas fa-edit",
      action: () => console.log("Edit mode"),
    }
    
  ]

  return <HeaderWrapper>   
        {HeaderButtons.map((e) => {
          return(
            (buttons.leftBtn === e.name) &&
            <Button radius={45} onClick={e.action} key={e.id}>
              <Icon className={e.icon} color={theme.colors.secondary.color1}/>
            </Button>
          )
        })}

        <H1>{getRouteData(title).data.title}</H1>
        
        {HeaderButtons.map((e) => {
          return (
            (buttons.rightBtn === e.name) && e.linkTo && e.action &&
              <HeaderLink to={e.linkTo} key={e.id}> 
                <Button radius={45} onClick={e.action}>
                  <Icon className={e.icon} color={theme.colors.secondary.color1}/>
                </Button>
              </HeaderLink>
          )
        })}
    </HeaderWrapper>
  
}
export default HeaderNavigation;
