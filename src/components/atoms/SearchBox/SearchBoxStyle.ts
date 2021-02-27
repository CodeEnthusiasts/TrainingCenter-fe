import styled from 'styled-components'
import Icon from '../Icon/Icon'

export const SearchField = styled.div`
  position: relative;
  display: flex;
`
export const StyledIcon = styled(Icon)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`
export const StyledInput = styled.input`
  font-size: ${ ({ theme }) => theme.fontSize.m };
  color: ${ ({ theme }) => theme.colors.secondary.color2 };
  outline: none;
  background-color: ${ ({ theme }) => theme.colors.input.background };
  border-radius: 20px;
  width: 90vw;
  height: 50px;
  border: none;
  -webkit-box-shadow: inset 5px 5px 20px 0px ${ ({ theme }) => theme.colors.input.darkShadow }, 
                      inset -3px -3px 10px 0px ${ ({ theme }) => theme.colors.input.lightShadow };
  -moz-box-shadow: inset 5px 5px 20px 0px ${ ({ theme }) => theme.colors.input.darkShadow }, 
                  inset -3px -3px 10px 0px ${ ({ theme }) => theme.colors.input.lightShadow };
  box-shadow: inset 5px 5px 20px 0px ${ ({ theme }) => theme.colors.input.darkShadow }, 
              inset -px -5px 10px 0px ${ ({ theme }) => theme.colors.input.lightShadow };
  padding-left: 20px;
`