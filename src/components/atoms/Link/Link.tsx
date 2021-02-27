import React, { FC } from 'react'
import styled from 'styled-components'
import { Link as LinkProp } from 'react-router-dom'

const StyledLink = styled(LinkProp)`
  text-decoration: none;
  color: #fff;

  *:active:visited {
    color: #fff;
  }
`

interface ILink {
  to: string
  children: React.ReactNode;
}

const Link: FC<ILink> = ({ to, children }) => {
  return (
    <StyledLink to={ to }>
      { children }
    </StyledLink>
  )
}

export default Link
