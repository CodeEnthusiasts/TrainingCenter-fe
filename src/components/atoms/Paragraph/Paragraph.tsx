import styled from 'styled-components';

const Paragraph = styled.p<{ color?: string }>`
  font-size: ${ ({ theme }) => theme.fontSize.m };
  color: ${ ({ theme, color }) => color ? color : theme.colors.secondary.color2 };
  margin: 0;
`;

export default Paragraph;