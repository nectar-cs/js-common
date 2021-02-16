import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";

export function ThreeStatusesGlanceView(props: Props){
  const { statuses } = props.spec;
  return(
    <Layout.Div>
      { (statuses || []).map((status, i) => (
        <StatusView
          key={i}
          {...status}
        />
      )) }
    </Layout.Div>
  )
}

function StatusView(status: Status){
  const { title, info, emotion } = status;
  return(
    <Layout.Div flex mt={1.5} align='center'>
      <Text.BorderedStatusTag
        width='32px'
        bold
        borderEmotion='lightGrey'
        emotion={emotion}
      >
        { title }
      </Text.BorderedStatusTag>
      <Text.P bold calm noSpill ml={1}>
        { info }
      </Text.P>
    </Layout.Div>
  )
}

type Status = {
  title: string,
  info: string,
  emotion: string
}

type Spec = {
  statuses: Array<Status>
}

type Props = {
  spec: Spec
}
