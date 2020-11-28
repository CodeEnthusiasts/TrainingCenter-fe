import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    * {
      color: ${theme.colors.secondary.color1};
    } 
  `}
  & > input {
    margin: 10px 0;
    width: 300px;
    height: 45px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.color1};
    background: none;
    padding: 4px 7px;
  }
  & > button {
    margin: 10px 0;
    background: none;
    width: 280px;
    border-radius: 15px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.secondary.color1};
  }
`;