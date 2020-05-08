import React, {Fragment} from 'react'
import {
  Text,
  Layout,
  Input,
  LeftHeader,
  inverseTheme,
  colorKeys,
  Table,
  Button,
  FlexHeader
} from 'nectar-gui'
import {ThemeProvider} from "styled-components";
import {Link} from "react-router-dom";

function SimpleTextExpo(){
  return(
    <Layout.Div mt={3} mb={1}>
      <Text.H1 mb={0.5}>Header H1</Text.H1>
      <Layout.Div flex>
        <Text.P>Paragraph with primaryFont.</Text.P>
        <Link to={'heaven'}>
          <Text.P ml={.5}>Default React Link.</Text.P>
        </Link>
        <Text.SilentLink to={'hell'}>
          <Text.P ml={.5}>Silent Link.</Text.P>
        </Text.SilentLink>
        <Text.HoverLink to={'beyond'}>
          <Text.P ml={.5}>Silent Link</Text.P>
        </Text.HoverLink>
      </Layout.Div>
      <Text.P calm mt={1}>Paragraph with secondaryFont</Text.P>

      <Text.H2 mt={1.5} mb={1}>Header H2</Text.H2>

      <Layout.Div padded rounded emotion={colorKeys.primaryColor} blink>
        <ThemeProvider theme={inverseTheme}>
          <Text.P mt={0}>Paragraph with primaryFont</Text.P>
          <Text.P calm mt={1}>Paragraph with secondaryFont</Text.P>
        </ThemeProvider>
      </Layout.Div>

      <Text.H3 mt={1.5} mb={1.0}>Header H3</Text.H3>
      <Layout.Div flex align='center'>
        <Text.StatusTag>Status Tag</Text.StatusTag>
        <Text.StatusTag blink ml={1} vertSwell={.5} emotion='nectar'>
          Unswelled Tag
        </Text.StatusTag>
        <Text.CleanStatus ml={1}>Clean Status</Text.CleanStatus>
      </Layout.Div>

      <Text.H4 mt={1.5}>Header H4</Text.H4>
      <Layout.Div mt={1} flex align='center'>
        <Text.Icon name='photo' ml={2}/>
        <Text.Icon name='photo' ml={1} emotion={colorKeys.cool}/>
        <Text.Icon size={1.2} name='photo' ml={1} emotion={colorKeys.excited}/>
      </Layout.Div>
    </Layout.Div>
  )
}

function TablesExpo(){
  return(
    <Layout.Div mt={2}>
      <Text.H1>Tables</Text.H1>
      <Table.Table mt={1}>
        <tr>
          <th><p>Column one</p></th>
          <th><p>Column two</p></th>
          <th><p>Column three</p></th>
          <th><p>Column four</p></th>
        </tr>
        <tr>
          <td><Text.P>Cell 1.1</Text.P></td>
          <td><p>Cell 1.2</p></td>
          <td><p>Cell 1.3</p></td>
          <td><p>Cell 1.4</p></td>
        </tr>

      </Table.Table>

      <Table.Table innerBorder mt={1.5}>
        <tr>
          <th><p>Column one</p></th>
          <th><p>Column two</p></th>
          <th><p>Column three</p></th>
          <th><p>Column four</p></th>
        </tr>

        <tr>
          <td><Text.P>Cell 2.1</Text.P></td>
          <td><Text.StatusTag>Tag 2.2</Text.StatusTag></td>
          <td><Text.CleanStatus>Clean 2.3</Text.CleanStatus></td>
          <td><Text.BoldStatus>Bold 2.4</Text.BoldStatus></td>
        </tr>
        <tr>
          <td><input type='checkbox'/></td>
          <td>
            <Layout.Div flex align='center'>
              <Text.P>Cell</Text.P>
              <Text.StatusTag emotion={colorKeys.excited} ml={1}>3.1</Text.StatusTag>
            </Layout.Div>
          </td>
          <td><Text.Icon name='photo' ml={2}/></td>
          <td>
            <Layout.Div flex align='flex-end' emotion={colorKeys.contentBackgroundColor}>
              <p>An Icon</p>
              <Text.Icon name='photo' ml={0.2}/>
            </Layout.Div>
          </td>
        </tr>

      </Table.Table>
    </Layout.Div>
  )
}

function FormsExpo(){
  return(
    <Layout.Div mt={2}>
      <Text.H2>Unlabelled Inputs</Text.H2>
      <Input.Input mt={2.5} placeholder='Length set to Auto'/>
      <Input.Input flat mt={1.5} placeholder='Flat Input'/>
      <Input.Select mt={2.5}><option>Hey</option></Input.Select>
      <Layout.Div flex mt={1.5}>
        <Input.Radio name='one'/>
        <Input.Radio name='one' s={{ml: 1}} checked/>
        <Text.P ml={.3}>With label</Text.P>
      </Layout.Div>

      <Text.H2 mt={4}>Labelled Inputs</Text.H2>
      <Layout.Div mt={1.5} padded rounded emotion={colorKeys.primaryColor}>
        <ThemeProvider theme={inverseTheme}>
          <Input.Line mt={0.5}>
            <Input.Label>Field label</Input.Label>
            <Input.Input placeholder='Length set to Auto'/>
          </Input.Line>
          <Input.Line>
            <Input.Label>Field label</Input.Label>
            <Input.Input flat placeholder='Flat Input'/>
            <Input.Select flat placeholder='Flat Input' ml={3}>
              <option>Flat Select</option>
            </Input.Select>
          </Input.Line>
        </ThemeProvider>
      </Layout.Div>

      <Text.H2 mt={4}>Buttons</Text.H2>
      <Button.Button mt={2}>Raw Button</Button.Button>
      <Link to='/widgets'>
        <Button.Button ml={2}>Widgets Demo</Button.Button>
      </Link>
      <Button.Button
        funky
        ml={2}
        horSwell={2}
        bkgEmotion='excited'>
        Round & Wide
      </Button.Button>
      <Button.Button ml={2} bkgEmotion={colorKeys.contentBackgroundColor}>
        Auto-contrast
      </Button.Button>
      <Button.Button disabled ml={2}>Disabled</Button.Button>
      <Layout.Div mt={2} relative>
        <Link to='/layout'>
          <Button.BigButton funky>Layouts Demo</Button.BigButton>
        </Link>
      </Layout.Div>
      <Button.BigButton centerLow>Bottom Button</Button.BigButton>
    </Layout.Div>
  )
}

export default function TextAndInputsExpo(){
  return(
    <Fragment>
      <Layout.LeftPanel>
        <LeftHeader
          graphicName='insert_photo'
          title='Text and Colors Expo'
          subtitle='Subtitle'
          graphicType='icon'
        />
        <SimpleTextExpo/>
        <TablesExpo/>
      </Layout.LeftPanel>
      <Layout.RightPanel>
        <FlexHeader
          graphicType='image'
          graphicName='https://robohash.org/estmodiofficia.png?size=300x300&set=set1'
        >
          <Fragment>
            <Text.H1>Inputs and </Text.H1>
            <Text.Icon name='laptop' size={1} ml={.4} mt={-.1}/>
          </Fragment>
          <Fragment>
            <Text.P>Also demoing</Text.P>
            <Text.StatusTag
              vertSwell={.1}
              ml={.8}
              emotion={colorKeys.cool}>
              Swag
            </Text.StatusTag>
          </Fragment>
        </FlexHeader>
        <FormsExpo/>
      </Layout.RightPanel>
    </Fragment>
  )
}
