import styled, { css } from 'styled-components'

export const InfoBtnWrapper = styled.button`
  font-weight: 600;
  display: flex;
  gap: 5px;
  align-items:center;
  border: none;
  padding: 5px 20px;
  border-radius: 10px;
  color: #000;
  background-color: ${ ({ theme }) => theme.colors.primmary.color1 };
  box-shadow: 5px 5px 11px -6px ${ ({ theme }) => theme.colors.button.shadow.dark }, 
            -5px -5px 11px -6px ${ ({ theme }) => theme.colors.button.shadow.light };
  ${ ({ theme }) => css`
  background: ${ theme.colors.primmary.color1 };
  background: -moz-linear-gradient(135deg,${ theme.colors.primmary.color1 } 0%, ${ theme.colors.primmary.color2 } 100%);
  background: -webkit-linear-gradient(135deg, ${ theme.colors.primmary.color1 } 0%, ${ theme.colors.primmary.color2 }100%);
  background: linear-gradient(135deg, ${ theme.colors.primmary.color1 } 0%, ${ theme.colors.primmary.color2 }) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(
          startColorstr=${ theme.colors.primmary.color1 },
          endColorstr=${ theme.colors.primmary.color2 },
          GradientType=1
          );
  ` };

             
`