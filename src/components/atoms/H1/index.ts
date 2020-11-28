import styled from 'styled-components';

const H1 = styled.h1<{color?: string}>`
  font-size: ${({theme}) => theme.fontSize.l};
  color: ${({color}) => color ? color : '#fff'};
  margin: 0;
`;

export default H1;