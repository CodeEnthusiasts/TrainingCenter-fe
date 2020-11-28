import styled, { css } from 'styled-components';

export const Div = styled.div`
  width: 280px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  font-size: 20px;
  text-transform: uppercase;
  margin: 50px 0;
  ${({ theme }) => css`
    color: ${theme.colors.primmary.color1};
    border: 3px solid ${theme.colors.primmary.color1};
  `}
`;