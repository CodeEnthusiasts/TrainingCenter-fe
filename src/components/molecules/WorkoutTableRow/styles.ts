import styled, { css } from 'styled-components';
import { ButtonWrapper } from '../../atoms/Button/styles';

export const Tr = styled.tr`;
  margin: 5px 0;
`;

export const Detail = styled(ButtonWrapper)`
  width: 40px;
  height: 35px;
  border-radius: 40%;
  color: ${({ theme }) => theme.colors.button.secondary.color1};
  font-weight: bold;
  display: block;
  margin: 0 auto;
`

export const Input = styled.input`
  width: 80px;
  height: 35px;
  border-radius: 15px;
  border: none;
  display: block;
  margin 0 auto;
  padding: 5px 7px;
  ${({ theme }) => css`
    color: ${theme.colors.secondary.color2};
    background: linear-gradient(135deg, 
      ${theme.colors.button.primmary.color1} 0%, 
      ${theme.colors.button.primmary.color2} 100%);
    box-shadow: 0 0 8px ${theme.colors.button.shadow.dark};
  `};
`;