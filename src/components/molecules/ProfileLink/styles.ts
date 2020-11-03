import styled, { css } from 'styled-components';
import { Link as LinkProto } from 'react-router-dom';

const linkSize = {
  width: '330px',
}

export const Link = styled(LinkProto)`
  display: block;
  margin: 0 auto;
  width: ${linkSize.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 5px;
  text-decoration: none;
  text-transform: capitalize;
  ${({ theme }) => css`
    color: ${theme.color100};
    border-bottom: 1px solid ${theme.color200};
  `}
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color100};
  margin-left: 15px;
`;