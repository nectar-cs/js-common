import React from 'react'
import Layout from "../styles/layout-styles";
import Text from "../styles/text-styles";
import Img from "../styles/img-styles";

function BaseRenderer({desc, recs}){
  const Renderer = desc2Renderer(desc);
  if(Renderer){
    return(
      <Renderer
        desc={desc}
        recs={recs}
      />
    )
  } else {
    console.log(`can't render`);
    console.log(desc);
    return null;
  }
}

function extractBlockSize(sectionDescs){
  return sectionDescs.reduce((whole, crt) => (
    whole + crt.width || 1
  ), 0);
}

function BlockRenderer({desc, recs}){
  const { title, sections, style } = desc;
  const size = extractBlockSize(sections);
  return(
    <Layout.Div
      width={`calc(${size} * 240px)`}
      pt='15px'
      plr='16px'
      borderRadius='2.5px'
      borderWidth='.5px'
      borderEmotion='lightGrey'
    >
      <Text.H3>
        { title }
      </Text.H3>
      <Layout.Div
        flex
        height='120px'
        jc='space-between'
        pt='7px'
        pb='22px'
        {...style}
        {...recs}
      >
        { sections.map((section, i) => (
          <BaseRenderer
            key={i}
            desc={section}
          />
        ))}
      </Layout.Div>
    </Layout.Div>
  )
}

function LineRenderer({desc, recs}){
  const { style, elements } = desc;

  function makeRecs(index){
    let out = {};
    if(elements[index].type === 'Tag')
      out = {...out, mt: '-2px' };

    if(index !== elements.length - 1)
      out = {...out, mr: '8px' };

    return out;
  }

  return(
    <Layout.Div
      flex
      align='center'
      {...recs}
      {...style}
    >
      { elements.map((childDesc, i) => (
        <BaseRenderer
          key={i}
          desc={childDesc}
          recs={makeRecs(i)}
        />
      )) }
    </Layout.Div>
  )
}

function SectionRenderer({desc, recs}){
  const { elements, style } = desc;
  return(
    <Layout.Div
      flex
      height='100%'
      style={{flexDirection: 'column'}}
      jc='center'
      {...style}
      {...recs}
    >
      { elements.map((elementDesc, i) => (
        <BaseRenderer
          key={i}
          desc={elementDesc}
        />
      )) }
    </Layout.Div>
  )
}

function TextRenderer({desc, recs}){
  const { text, style } = desc;
  return <Text.P {...style} {...recs}>{text}</Text.P>;
}

function TagRenderer({desc, recs}){
  const { text, style } = desc;
  return <Text.ModestTag {...style} {...recs}>{text}</Text.ModestTag>;
}

function IconRenderer({desc, recs}){
  const { name, style } = desc;
  return (
    <Text.Icon
      name={name}
      size={.7}
      {...style}
      {...recs}
    />
  );
}

function ImageRenderer({desc, recs}){
  const { uri, style } = desc;
  return <Img.Img src={uri} {...recs} {...style}/>;
}

function breakOn(actual, permitted, strAllowed, nullAllowed){
  if(actual){
    if(typeof actual === 'object') {
      if(!permitted.includes(actual.type))
        return false;
    } else if(typeof actual === 'string'){
      if(!strAllowed)
        return false;
    } else return false;
  } return nullAllowed;
}

function ThreePartHeaderRenderer({desc, recs}) {
  const { graphic, title, subtitle } = desc;
  const downRecs = { mr: '12px' };

  return(
    <Layout.Div flex height='41px' {...desc.style} {...recs}>
      <BaseRenderer
        desc={graphic}
        recs={{height: '100%'}}
      />
      <Layout.Div ml='9px'>
        <BaseRenderer
          desc={title}
          recs={{...downRecs, fontSize: "14px"}}
        />
        <BaseRenderer
          desc={subtitle}
          recs={downRecs}
        />
      </Layout.Div>
    </Layout.Div>
  )
}

function desc2Renderer(desc){
  if(typeof desc === 'object')
    return descToRendererMapping[desc.type];
}

const descToRendererMapping = {
  Block: BlockRenderer,
  Section: SectionRenderer,
  ThreePartHeader: ThreePartHeaderRenderer,
  Text: TextRenderer,
  Tag: TagRenderer,
  Image: ImageRenderer,
  Line: LineRenderer,
  Icon: IconRenderer
};

export default {
  BlockRenderer
}
