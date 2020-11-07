import { Button } from './../../molecules/UniversalAccountButton/styles';
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
    background: ${theme.primmary100};
    background: -moz-linear-gradient(135deg, ${theme.primmary100} 0%, ${theme.primmary200} 100%);
    background: -webkit-linear-gradient(135deg, ${theme.primmary100} 0%, ${theme.primmary200} 100%);
    background: linear-gradient(135deg, ${theme.primmary100} 0%, ${theme.primmary200} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr = ${theme.primmary100},
      endColorstr = ${theme.primmary200},
      GradientType = 1
      );
    -webkit-box-shadow: 10px 10px 18px -6px ${theme.darkShadow};
    -moz-box-shadow: 10px 10px 18px -6px ${theme.darkShadow};
    box-shadow: 5px 5px 11px -6px ${theme.darkShadow};  
    border: 2px solid ${theme.primmary100};
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
    -webkit-box-shadow: -10px -10px 18px -6px ${theme.lightShadow};
    -moz-box-shadow: -10px -10px 18px -6px ${theme.lightShadow};
    box-shadow: -5px -5px 11px -6px ${theme.lightShadow};
  `}
  
`