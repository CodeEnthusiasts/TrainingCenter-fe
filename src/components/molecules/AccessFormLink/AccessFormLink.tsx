import React, { FC } from 'react';
import Link from '../../atoms/Link/Link';
import { RoutePaths } from '../../../routes';

interface IAccessFormLink {
  to: RoutePaths,
  content: string,
}

const AccessFormLink: FC<IAccessFormLink> = ({ to, content }) => {
  return (
    <Link to={ to }>
      { content }
    </Link>
  )
}

export default AccessFormLink;