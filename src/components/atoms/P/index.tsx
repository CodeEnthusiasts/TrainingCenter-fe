import styled from 'styled-components';

const P = styled.p`
  font-size: ${({theme}) => theme.fontSize.m};
  color: ${({theme}) => theme.color200};
  margin: 0;
`;

export default P;