import React, {Fragment} from 'react'
import {
  Checklist,
  ColoredLabelList,
  EasyListItem,
  Text,
  Layout,
  LeftHeader, Micon,
  TextOverLineSubtitle,
  In,
  Button,
  ModalButton
} from 'nectar-cs-js-common'

export default function Basics(){
  return(
    <Fragment>
      <Layout.LeftPanel>
        <LeftHeader
          graphicName='insert_photo'
          title='Left Header'
          subtitle='Subtitle'
          graphicType='icon'
        />
        <TextOverLineSubtitle text={'Text Over Line Subtitle'}/>
        <Text.P2 top={3}>Text.P2</Text.P2>
        <Text.StatusTag top={3}>Text.StatusTag</Text.StatusTag>
        <Layout.Div top={1}>
          <ColoredLabelList labelType='blacklist' labels={['black', 'list']}/>
        </Layout.Div>
        <Layout.Div top={1}>
          <ColoredLabelList labelType='whitelist' labels={['white', 'list']}/>
        </Layout.Div>
        <Micon n={'list'}/>
        <EasyListItem title='EasyListItem' subtitle="subtitle" iconName='list'/>
        <Checklist items={[
          {name: "Status: Idle", detail: "", status: "idle"},
          {name: "Status: Working with long text and it works", detail: "", status: "done"},
          {name: "Status: Done", detail: "", status: "done"},
          {name: "Status: Failed", detail: "", status: "failed"}
        ]}/>
        <Layout.BigCodeViewer>
          <Text.Code>
            Layout.BigCodeViewer
          </Text.Code>
        </Layout.BigCodeViewer>
        <Button.ConfirmButton>Button.ConfirmButton</Button.ConfirmButton>
      </Layout.LeftPanel>
      <Layout.RightPanel>
        <Text.P2>Full width input</Text.P2>
        <In.InputLine>
          <In.LineInput name={'hey'} placeholder='Placeholders'/>
        </In.InputLine>
        <Text.P2 top={3}>Label and input</Text.P2>
        <In.InputLine>
          <In.LineLabel>Email</In.LineLabel>
          <In.LineInput
            name='Email'
            type='email'
            placeholder='Email'
          />
        </In.InputLine>

        <Layout.Panel top={3} emotion='primaryColor'>
          <In.ContrastInput placeholder='Password'/>
        </Layout.Panel>

        <ModalButton
          callback={_ => alert("Bang")}
          title='ModalButton'
        />
      </Layout.RightPanel>
    </Fragment>
  )
}
