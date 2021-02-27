import styled, { css } from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const DefaultButtonRadius = 60;
const primmary1 = theme.colors.button.primmary.color1;
const primmary2 = theme.colors.button.primmary.color2;
const secondary1 = theme.colors.button.secondary.color1;
const secondary2 = theme.colors.button.secondary.color2;

export const ButtonWrapper = styled.button<{ radius?: number, secondary?: boolean, play?: boolean }>`
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


  ${ ({ theme, radius, secondary, play }) => css`
    padding-left: ${ play && '10px' };
    width: ${ radius ? radius : DefaultButtonRadius }px;
    height: ${ radius ? radius : DefaultButtonRadius }px;
    border-radius:  ${ radius ? radius / 2 : DefaultButtonRadius / 2 }px;
    background: ${ secondary ? secondary1 : primmary1 };
    background: -moz-linear-gradient(135deg, 
      ${ secondary ? secondary1 : primmary1 } 0%, 
      ${ secondary ? secondary2 : primmary2 } 100%);
    background: -webkit-linear-gradient(135deg, 
      ${ { secondary } ? secondary1 : primmary1 } 0%, 
      ${ secondary ? secondary2 : primmary2 } 100%);
    background: linear-gradient(135deg, 
      ${ secondary ? secondary1 : primmary1 } 0%, 
      ${ secondary ? secondary2 : primmary2 } 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr = ${ secondary ? secondary1 : primmary1 },
      endColorstr = ${ secondary ? secondary2 : primmary1 },
      GradientType = 1
      );
    -webkit-box-shadow: 10px 10px 18px -6px ${ theme.colors.button.shadow.dark },
                        -5px -5px 11px -6px ${ theme.colors.button.shadow.light };
    -moz-box-shadow: 10px 10px 18px -6px ${ theme.colors.button.shadow.dark }, 
                    -5px -5px 11px -6px ${ theme.colors.button.shadow.light };
    box-shadow: 5px 5px 11px -6px ${ theme.colors.button.shadow.dark }, 
                -5px -5px 11px -6px ${ theme.colors.button.shadow.light };  
    border: 1px solid ${ secondary ? secondary2 : primmary1 };
  ` }
`;
