import styled, { css } from 'styled-components';
import { Link as LinkProto } from 'react-router-dom';

export const Link = styled(LinkProto)<{ active: boolean, isSpecial: true | undefined }>`
  height: 50px;
  width: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  border: none;
  ${({ isSpecial, theme }) => isSpecial && css`
    border: 3px solid ${theme.primmary};
    border-radius: 50%;
  `};
  ::after {
    content: '';
    position: absolute;
    display: ${({ active }) => active ? 'block' : 'none'};
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.primmary};
    border-radius: 50%;
    left: 20px;
    top: 55px;
  }
`;

