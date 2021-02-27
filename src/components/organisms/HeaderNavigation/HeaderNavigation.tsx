import React, {FC} from 'react'
import H1 from '../../atoms/H1/H1'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import Routes from '../../../routes/'
import { theme } from '../../../theme/mainTheme'
import { HeaderWrapper, HeaderLink} from './styles'
import { HeaderButtons } from './HeaderButtons'

const getRouteData = (path:string) => {
  const Data = Routes.filter((element) => {
    return element.path === path
  })
  return Data[0];
}

export interface IHeaderNavigation {
  title: string;
  buttons: {
    leftBtn: string,
    rightBtn: string
  }
  actions?: {
    leftBtnAction?: (() => void) | undefined;
    rightBtnAction?: (() => void) | undefined;
  }
  links?: {
    leftBtnLink?: string | undefined;
    rightBtnLink?: string | undefined;
  }
}
const HeaderNavigation:FC<IHeaderNavigation> = ({title, buttons, actions, links}) => {

  return <HeaderWrapper> 
       {HeaderButtons.map((btn) => {
          return(
            (buttons.leftBtn === btn.name) &&
            <Button radius={45} onClick={actions?.leftBtnAction } key={btn.name}>
              <Icon className={btn.icon} color={theme.colors.button.primmary.text}/>
            </Button>
          )
        })}

        <H1>{getRouteData(title).data.title}</H1>
        
        {HeaderButtons.map((btn) => {
          return (
            (buttons.rightBtn === btn.name) &&
                <Button secondary={btn.secondary} radius={45} onClick={ actions?.rightBtnAction} key={btn.name}>
                {links?.rightBtnLink 
                ?<HeaderLink to={links.rightBtnLink}> 
                  <Icon className={btn.icon} color={theme.colors.button.primmary.text}/>
                </HeaderLink>
    
                  : <Icon className={btn.icon} color={theme.colors.button.primmary.text}/>
                }
                </Button>
          )
        })} 
    </HeaderWrapper>
  
}
export default HeaderNavigation;
