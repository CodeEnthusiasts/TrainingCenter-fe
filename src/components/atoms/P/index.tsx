import styled from 'styled-components';

const P = styled.p<{color?: string}>`
  font-size: ${({theme}) => theme.fontSize.m};
  color: ${({theme, color}) => color ? color :  theme.color200};
  margin: 0;
`;

export default P;