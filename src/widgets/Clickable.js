import React from 'react'
import ModestLink from "./ModestLink";

export default function Clickable({action, children, ...rest}){
  if(!action){
    return children;
  }
  else if(typeof action === 'string'){
    if(action.startsWith("http://") || action.startsWith("https://")){
      return(
        <a
          href={action}
          target='_blank'
          style={{textDecoration: 'none'}}
          {...rest}
        >
          { children }
        </a>
      )
    } else {
      return(
        <ModestLink
          to={action}
          {...rest}
        >
          {children}
        </ModestLink>
      )
    }
  } else return React.cloneElement(children, { onClick: action });
}
