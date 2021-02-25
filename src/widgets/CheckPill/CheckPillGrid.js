import React from "react";
import CheckPill from "./CheckPill";
import NectarGuiUtils from "../../utils/NectarGuiUtils";
import dataUtils from "../../utils/dataUtils";
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";

export default function CheckPillGrid(props){
  const { values, setValues, available, nectar } = props;

  function update(value) {
    if(values.includes(value))
      setValues(dataUtils.arrayRm(values, values.indexOf(value)));
    else setValues([...values, value]);
  }

  const img = url => nectar ? NectarGuiUtils.image(url) : url;

  return(
    <Layout.Div>
      <TitleView{...props}/>
      <Layout.Div flex style={{flexWrap: 'wrap'}}>
        { available.map((option, i) => (
          <Layout.Div
            mr={1.2}
            key={i}>
            <CheckPill
              text={option.name}
              img={img(option.img)}
              checked={values.includes(option.id) || values.includes(option.name)}
              callback={_ => update(option.id || option.name)}
            />
          </Layout.Div>
        )) }
      </Layout.Div>

    </Layout.Div>
  )
}

function TitleView({title, lockText}){
  return(
    <Layout.Div flex align='center'>
      { title && (
        <Text.P bold>{title}</Text.P>
      ) }
      { lockText && (
        <Layout.Div
          mt={-.1}
          flex
          ml={1}
          align='center'
          rounded
          lightBorder
          borderEmotion='warning2'
          borderWidth='1.4px'
          ptb={.3}
          pr={.5}
          pl={.1}>
          <Text.Icon
            size={.78}
            mt={-.2}
            name='lock' ml={.4}
          />
          <Text.P ml='3px' bold >
            { lockText }
          </Text.P>
        </Layout.Div>
      ) }
    </Layout.Div>
  )
}

CheckPillGrid.defaultProps = {
  values: [],
  available: [],
  nectar: false
}
