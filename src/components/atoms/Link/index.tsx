import React, {FC} from 'react'
import styled from 'styled-components'
import { Link as LinkProp} from 'react-router-dom'
import { ILink } from '../../../__types__/ILink';

const StyledLink = styled(LinkProp)`
  text-decoration: none;
  color: #fff;
  *:active:visited{
    color: #fff;
  }
`
const Link:FC<ILink> = ({to, children}) => {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  )
}

export default Link
