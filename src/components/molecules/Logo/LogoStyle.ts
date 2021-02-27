import styled, { css } from 'styled-components';

export const Div = styled.div`
  width: 280px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  text-transform: uppercase;
  margin: 50px 0;
  ${ ({ theme }) => css`
    font-size: ${ theme.fontSize.xl };
    color: ${ theme.colors.secondary.color1 };
    border: 4px solid ${ theme.colors.secondary.color1 };
  ` }
`;