import React, {useState} from "react";
import TagPool from "../TagPool/TagPool";

export default function TagPoolFilter(props: Props){
  const { choices } = props;

  return(
    <TagPool
      callback={() => {}}
      defaultsArray={[]}
      optionsHash={choices}
    />
  )
}

type Props = {
  choices: {}
}
