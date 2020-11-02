import styled, { css } from 'styled-components';

const TileSize = {
  width: '150px',
  height: '125px',
}

export const Tile = styled.div`
  width: ${TileSize.width};
  height: ${TileSize.height};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 15px;
  ${({ theme }) => css`
    background: ${theme.accountTile100};
    box-shadow: 0 3px 15px ${theme.darkShadow};
    & > p {
      :first-of-type {
        text-transform: capitalize;
        margin-top: 7px;
      }
      :last-of-type {
        color: ${theme.color100};
      }
    }
  `};
`;

export const Hr = styled.hr`
  width: 70%;
  background: ${({ theme }) => theme.color400};
  height: 1px;
  margin: 5px 0;
`;