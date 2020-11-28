import React, { FC } from 'react';
import Link from '../../atoms/Link';
import IAccessFormLink from '../../../__types__/IAccessFormLink';

const AccessFormLink: FC<IAccessFormLink> = ({ to, content }) => {
  return (
    <Link to={ to }>
      { content }
    </Link>
  )
}

export default AccessFormLink;