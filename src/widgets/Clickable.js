import React from 'react'
import ModestLink from "./ModestLink";

export default function Clickable({action, children}){
  if(typeof action === 'string'){
    return(
      <ModestLink
        to={action}>
        {children}
      </ModestLink>
    )
  } else return React.cloneElement(children, { onClick: action });
}
