import React from 'react';
import { Link } from 'react-router-dom';

export default function ModestLink({to, children, disabled, ...rest}) {
  if(disabled) return children;

  return (
    <Link
      to={to}
      style={{textDecoration: 'none'}}
      {...rest}
    >
      { children }
    </Link>
  );
}
