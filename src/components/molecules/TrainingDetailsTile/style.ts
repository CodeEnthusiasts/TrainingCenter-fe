import { Link as LinkProp} from 'react-router-dom'
import { theme } from './../../../theme/mainTheme';
import styled from 'styled-components';

const ActiveColor1 = theme.colors.button.secondary.color1;
const ActiveColor2 = theme.colors.button.secondary.color2;
const RegularColor1 = theme.colors.card.color1;
const RegularColor2 = theme.colors.card.color2;
const shadow1 = theme.colors.button.shadow.dark;
const shadow2 = theme.colors.button.shadow.light;
const size = 110;

export const TailWrapper = styled.button<{active?: boolean}>`
  position: relative;
  min-width: ${size}px;
  min-height: ${size}px;
  background: ${({active}) => active ? ActiveColor1 : RegularColor1};
  border-radius: 15px;
  border: 3px solid ${({active}) => active ? ActiveColor2 : RegularColor2};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;
  -webkit-box-shadow: 5px 5px 20px 0px ${shadow1};
  -moz-box-shadow: 5px 5px 20px 0px ${shadow1};    
  box-shadow: 5px 5px 20px 0px ${shadow1};
  background: -moz-linear-gradient(135deg, 
              ${({active}) => active ? ActiveColor1 : RegularColor1} 0%, 
              ${({active}) => active ? ActiveColor2 : RegularColor2} 100%); 
  background: -webkit-linear-gradient(135deg, 
              ${({active}) => active ? ActiveColor1 : RegularColor1} 0%, 
              ${({active}) => active ? ActiveColor2 : RegularColor2} 100%);       
  background: linear-gradient(135deg,
              ${({active}) => active ? ActiveColor1 : RegularColor1} 0%, 
              ${({active}) => active ? ActiveColor2 : RegularColor2} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(
  startColorstr=${({active}) => active ? ActiveColor1 : RegularColor1},
  endColorstr =${({active}) => active ? ActiveColor1 : RegularColor2},
  Gr adientType=1);
`
export const LightShadow = styled.div`
  min-width: ${size}px;
  min-height: ${size}px;
  position: absolute;
  border-radius: 15px;
  z-index: -1;
  -webkit-box-shadow: -5px -5px 20px 0px ${shadow2};
  -moz-box-shadow: -5px -5px 20px 0px ${shadow2};
  box-shadow: -5px -5px 20px 0px ${shadow2};
`
export const Link = styled(LinkProp)`
  text-decoration: none;
  &:active:visited{
    color: #fff;
  }
`