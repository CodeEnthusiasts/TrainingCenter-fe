// import { Button } from './../../molecules/UniversalAccountButton/styles';
import styled, {css} from 'styled-components';

const DefaultButtonRadius = 60;

export const ButtonWrapper = styled.button<{radius?: number, }>`

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  :active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }


  ${({theme, radius}) => css`

    width: ${radius ? radius : DefaultButtonRadius}px;
    height: ${radius ? radius : DefaultButtonRadius}px;
    border-radius:  ${radius ? radius/2 : DefaultButtonRadius/2}px;
    background: ${theme.colors.button.secondary.color1};
    background: -moz-linear-gradient(135deg, 
              ${theme.colors.button.secondary.color1} 0%, 
              ${theme.colors.button.secondary.color2} 100%);
    background: -webkit-linear-gradient(135deg, 
              ${theme.colors.button.secondary.color1} 0%, 
              ${theme.colors.button.secondary.color2} 100%);
    background: linear-gradient(135deg, 
              ${theme.colors.button.secondary.color1} 0%, 
              ${theme.colors.button.secondary.color2} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr = ${theme.colors.button.secondary.color1},
      endColorstr = ${theme.colors.button.secondary.color2},
      GradientType = 1
      );
    -webkit-box-shadow: 10px 10px 18px -6px ${theme.colors.button.shadow.dark.color};
    -moz-box-shadow: 10px 10px 18px -6px ${theme.colors.button.shadow.dark.color};
    box-shadow: 5px 5px 11px -6px ${theme.colors.button.shadow.dark.color};  
    border: 2px solid ${theme.colors.button.secondary.color2};
  `}
`;

export const LightBoxShadow = styled.div<{radius?: number}>`
  position: absolute;
  top: 0;
  left: 0;
  
  ${({theme, radius}) => css`
    width: ${radius ? radius : DefaultButtonRadius}px;
    height: ${radius ? radius : DefaultButtonRadius}px;
    border-radius: ${radius ? radius/2 : DefaultButtonRadius/2}px;
    -webkit-box-shadow: -10px -10px 18px -6px ${theme.colors.button.shadow.light.color};
    -moz-box-shadow: -10px -10px 18px -6px ${theme.colors.button.shadow.light.color};
    box-shadow: -5px -5px 11px -6px ${theme.colors.button.shadow.light.color};
  `}
  
`