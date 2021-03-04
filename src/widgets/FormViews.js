import React, {Fragment} from "react";
import NectarGuiUtils from "../utils/NectarGuiUtils";
import Layout from "../styles/layout-styles";
import Text from "../styles/text-styles";
import Input from "../styles/input-styles";
import Img from "../styles/img-styles";
import {TextOverLineSubtitle} from "./TextOverLineSubtitle/TextOverLineSubtitle";

function FieldTitle({children, lockable, locked, setLocked, ...rest}){
  return(
    <Layout.Div flex align={'center'}>
      <Text.P ml={.2} bold mb={1.05} {...rest}>
        { children }
      </Text.P>

      { lockable && (
        <Layout.Div
          onClick={_ => setLocked(!locked)}
          ml={.8}
          mt='-14px'
          borderWidth='1.5px'
          borderEmotion='#C57B57'
          borderRadius='5px'
          hov_bkgEmotion='calmBeige'
          hov_point
          ptb='4px'
          plr='9px'
          flex
          align='center'>
          <Text.Icon
            name='lock'
            size={.80}
          />
          <Text.P
            ml={.4}>
            { locked ? "Locked. Click to overwrite" : "Click undo overwrite" }
          </Text.P>
        </Layout.Div>
      )}
    </Layout.Div>
  )
}

function SectionHeader({lineEmotion, lineProps, ...props}) {
  lineProps = {...lineProps, bkgEmotion: lineEmotion};
  return(
    <TextOverLineSubtitle
      bold
      humane
      lineProps={lineProps}
      mt={.15}
      outerProps={{mb: '0px', mt: '0px'}}
      {...props}
    />
  )
}

function FlatListInputGroup(props){
  const {addCallback, removeCallback, changeCallback, items, child} = props;

  return(
    <Layout.Div>
      { items.map((item, i) => (
        <Layout.Div
          flex
          mb={i === items.length - 1 ? 0 : 2}
          style={{justifyContent: 'space-between'}}
          align={'center'}>
          { child({
            key: i,
            ...item,
            set: ((attr, val) => changeCallback(attr, val, i))
          })
          }
          <Text.Icon
            style={{textAlign: 'right'}}
            width={'40px'}
            mt={2.2}
            name='delete'
            hov_point
            onClick={_ => removeCallback(i)}
            hov_emotion='warning2'
          />

        </Layout.Div>
      ))
      }
      <Layout.Div
        width={2}
      />
      <Layout.Div
        onClick={addCallback}
        mt={1}
        iFlex
        align='center'
        hov_point
        padded
        pl={0}
        sofa
        hov_bkgEmotion='soothing'
      >
        <Text.Icon
          emotion='cool'
          name='add'
          hov_point
          size={1.25}
        />
        <Text.P
          ml={.4}
          mt={.25}
          emotion={null}>
          ADD
        </Text.P>
      </Layout.Div>
    </Layout.Div>
  )
}


function ListInputGroup(props){
  const {addCallback, removeCallback, changeCallback, items, child} = props;
  return(
    <Layout.Div>
      <Layout.Div width={'100%'} ml={1}>
        { items.map((item, i) => (
          <Layout.Div flex mb={i === item.length - 1 ? 0 : 2}>
            <Layout.Div pr={2}>
              <Text.Icon
                name='delete'
                hov_point
                onClick={_ => removeCallback(i)}
                hov_emotion='warning2'
              />
              <Layout.Div
                width='10px'
                height='100%'
              />
            </Layout.Div>
            {  child({
              ...item,
              key: i,
              set: ((attr, val) => changeCallback(attr, val, i))
            })
            }
          </Layout.Div>
        )) }
      </Layout.Div>
      <Text.Icon
        emotion='cool'
        mt={.8}
        name='add'
        onClick={addCallback}
        hov_point
        size={1.25}
      />
    </Layout.Div>
  )
}

function CheckboxDuo({title, value, callback, info}){
  return(
    <Layout.Div>
      <Layout.Div flex>
        <Text.P bold mt={.7}>{title}</Text.P>
        <Input.Checkbox
          checked={value}
          onChange={e => callback(e.target.checked)}
        />
      </Layout.Div>
      <Layout.Div flex mt={.2}>
        <Text.Icon name='help_outline' emotion={'warning2'} size={.79}/>
        <Text.P calm ml={.4} mt={'-.5px'}>{ info }</Text.P>
      </Layout.Div>
    </Layout.Div>
  )
}

function InputDuo({title, value, error, callback,locked, setLocked,
                    lockable, calm, width, ...rest}){
  return(
    <Layout.Div width={width || '100%'}>
      <FieldTitle
        locked={locked}
        setLocked={setLocked}
        lockable={lockable}
        calm={calm}>
        {title}
      </FieldTitle>
      <Input.FlatInput
        disabled={locked}
        value={value}
        onChange={e => callback(e.target.value)}
        {...rest}
      />
      { error && (
        <InputDuoError {...typeMassageError(error)} />
      ) }
    </Layout.Div>
  )
}

function InputDuoError({tone, title, text}){
  const emotion = tone === 'error' ? 'nectar' : 'warning2';
  return(
    <Layout.Div flex mt={.5}>
      <Text.Icon
        name={'error_outline'}
        emotion={emotion}
        size={.8}
      />
      <Text.P ml={.3} bold emotion={emotion}>
        { title }
      </Text.P>
      <Text.P ml={.3} emotion={emotion}>
        { text }
      </Text.P>
    </Layout.Div>
  )
}

function TextAreaDuo({title, info, calm, locked, error, value, setLocked,
                       lockable, callback, ...rest}){
  return(
    <Layout.Div width='100%'>
      <Layout.Div flex align='center'>
        <FieldTitle
          calm={calm}
          lockable={lockable}
          locked={locked}
          setLocked={setLocked}
        >
          {title}
        </FieldTitle>
      </Layout.Div>
      { !locked &&
      <Fragment>
        { info &&
        <Layout.Div flex align='center' mb={1}>
          <Text.Icon name='help_outline' size={.7} emotion='hipBlue'/>
          <Text.P calm mt={.1} ml={.4}>{info}</Text.P>
        </Layout.Div>
        }
        <Input.FlatTextArea
          disabled={locked}
          minHeight='100px'
          value={locked ? "WRITE-ONLY VALUE" : value}
          onChange={e => callback(e.target.value)}
          {...rest}
        />
      </Fragment>
      }
      { error && (
        <InputDuoError {...typeMassageError(error)} />
      ) }

    </Layout.Div>
  )
}

export function SelectDuo({title, calm, error, options, width, value, callback}){
  return(
    <Layout.Div width={width || '100%'}>
      <FieldTitle calm={calm}>{title}</FieldTitle>
      <Input.FlatSelect
        value={value}
        onChange={e => callback(e.target.value)}>
        { options }
      </Input.FlatSelect>
      { error && (
        <InputDuoError {...typeMassageError(error)} />
      ) }
    </Layout.Div>
  )
}

function Breaker({height}){
  return <Layout.Div height={height || 2.5}/>
}


export function Warner({text}){
  return(
    <Layout.Div>
      <Layout.Div
        borderEmotion='warning2'
        borderWidth='6px'
        borderStyle='none none none solid'>
        <Layout.Div ml={2}>
          <Text.P fontSize={'13.5px'}>
            { text }
          </Text.P>
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

function HeadsUp({title, text, children}){
  return(
    <Layout.Div sexyShadow padded borderRadius='8px' pt={.94}>
      <Layout.Div flex align='center'>
        <Text.Icon name={'help'} emotion='warning2' size={.88}/>
        <Text.P bold calm ml={.5}>{title}</Text.P>
      </Layout.Div>
      <Text.P mt={.8}>
        { text }
      </Text.P>
      { children }
    </Layout.Div>
  )
}

function RadioGroup({options, value, callback, calm}){
  const entries = Object.entries(options);
  return entries.map((option, i) => (
    <Layout.Div key={i}>
      <Fragment>
        <Layout.Div
          align='center'
          hov_point
          onClick={_ => callback(option[0])}
          flex>
          <input
            style={{"&:hover": { cursor: 'pointer' }}}
            onClick={_ => callback(option[0])}
            checked={value === option[0]}
            type='radio'
          />
          <Text.P
            mt='2px'
            ml={.75}
            bold
            calm={calm}
          >
            {option[1].title}
          </Text.P>
        </Layout.Div>
        { option[1].info &&
        <Text.P mt={.6} ml={0} calm>{option[1].info}</Text.P>
        }
      </Fragment>
      { i !== entries.length - 1 && <Breaker/>
      }
    </Layout.Div>
  ));
}

function LogoInputView({value, callback, title}){
  return(
    <Layout.Div>
      <FieldTitle>{title}</FieldTitle>
      <Layout.Div flex width='100%' mt={1}>
        <Img.Img
          height={5.60}
          width={5.60}
          centerCrop
          mb={.2}
          borderRadius={'4px'}
          src={value || NectarGuiUtils.image('image-placeholder.jpg')}
        />
        <Layout.Div width='100%' ml={2}>
          <Input.FlatInput
            calm
            value={value}
            onChange={e => callback(e.target.value)}
          />
          <Layout.Div flex mt={.5} align='center'>
            <Text.Icon
              name='crop_free'
              calm
              hov_point
              size={.7}
            />
            <Text.P
              calm
              mt={.1}
              ml={.5}
            >
              Squares and circles preferred
            </Text.P>
          </Layout.Div>
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

function InfoTipView({title, text, children, emotion, tabbed, link, cta}){
  return(
    <Layout.Div
      mb={2}
      pl={tabbed ? 1.5 : 0}
      borderStyle={tabbed ? "none none none solid" : 'none'}
      borderWidth={tabbed ? '4px' : 0}
      borderEmotion={emotion}>
      { title && (
        <Layout.Div flex align='center' mb={.5}>
          <Text.Icon name='help_outline' emotion={emotion} size={.8}/>
          <Text.P mt={.1} ml={.7} fontSize='14px' bold calm>{title}</Text.P>
        </Layout.Div>
      ) }
      { text &&
      <Text.P
        calm={false}
        humane
      >
        { text }
      </Text.P>
      }
      { children }
      { link && (
        <a href={link} style={{textDecoration: 'none'}} target='_blank'>
          <Layout.Div
            mt={.7}
            plr={.5}
            pt='3px'
            pb='2px'
            iFlex
            bkgEmotion={emotion}
            rounded
            width={'auto'}>
            <Text.P hov_underline emotion={'white'}>{cta}</Text.P>
            <Text.Icon
              mt='1px'
              ml='3px'
              name='open_in_new'
              emotion='white'
              size={.76}
            />
          </Layout.Div>
        </a>
      ) }
    </Layout.Div>
  )
}

HeadsUp.defaultProps = {
  title: "Heads Up"
}

InfoTipView.defaultProps = {
  title: null,
  emotion: 'hipBlue',
  tabbed: false,
  cta: "Open Docs"
}

InputDuoError.defaultProps = {
  tone: 'warning'
}

SectionHeader.defaultProps = {
  lineProps: { height: '1.5px' },
  lineEmotion: 'warning2'
}

function typeMassageError(error){
  if(typeof error === 'string')
    return { title: error }
  else return error;
}

// noinspection JSUnusedGlobalSymbols
export default {
  InputDuo,
  SelectDuo,
  TextAreaDuo,
  RadioGroup,
  CheckboxDuo,
  InfoTipView,
  Breaker,
  LogoInputView,
  HeadsUp,
  Warner,
  ListInputGroup,
  FlatListInputGroup,
  SectionHeader
};


