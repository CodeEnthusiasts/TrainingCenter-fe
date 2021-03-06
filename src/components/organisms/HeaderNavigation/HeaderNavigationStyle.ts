import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 20px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 999;
`
export const HeaderLink = styled(Link)`
  text-decoration: none;
`
