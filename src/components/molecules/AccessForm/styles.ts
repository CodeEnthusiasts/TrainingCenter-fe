import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > input {
    margin: 10px 0;
    width: 300px;
    height: 45px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.color2};
    color: ${({ theme }) => theme.colors.secondary.color1};
    background: none;
    padding: 4px 7px;
    text-transform: capitalize;
  }
  & > button {
    margin: 50px 0;
    background: none;
    width: 280px;
    border-radius: 15px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => css`
      color: ${theme.colors.background.solid};
      font-size: ${theme.fontSize.l};
      background: ${theme.colors.button.secondary.color1};
      border: none;
      box-shadow: 0 3px 15px ${theme.colors.button.shadow.light};
    `};

  }
`;