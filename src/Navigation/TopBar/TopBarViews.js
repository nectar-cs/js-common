import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
import Clickable from "../../widgets/Clickable";

const itemPlr = 1.3;

function ImgAndLink({src, title, text, ...rest}) {
  const imgSize = '38px';
  return(
    <Layout.Div flex plr={itemPlr}>
      { src && (
        <Img.Img
          mr={.7}
          src={src}
          width={imgSize}
          height={imgSize}
          centerCrop
          borderRadius='50%'
        />
      ) }
      <Layout.Div>
        <Text.P humane bold>{title}</Text.P>
        <Layout.Div flex align='center'>
          <Text.Icon
            name='tune'
            size={.7}
            emotion='hipBlue'
          />
          <Clickable {...rest}>
            <Text.P
              ml={.2}
              emotion='hipBlue'
              mt={.1}>
              {text}
            </Text.P>
          </Clickable>
        </Layout.Div>
      </Layout.Div>
    </Layout.Div>
  )
}

function Separator({...props}){
  return(
    <Layout.Div
      mt={1.5}
      mb={1.5}
      bkgEmotion='lightGrey'
      height='1px'
      {...props}
    />
  )
}

function ClickableRow({icon, text, ...rest}){
  return(
    <Clickable {...rest}>
      <Layout.Div
        mt={.8}
        plr={itemPlr}
        flex
        align='center'>
        <Text.Icon
          emotion='warning2'
          name={icon}
          size={.66}
        />
        <Text.P
          mt='1px'
          calm
          hov_point
          hov_bold
          ml={.4}>
          { text }
        </Text.P>
      </Layout.Div>
    </Clickable>
  )
}

const TopBarViews = {
  ImgAndLink,
  ClickableRow,
  Separator
}

export default TopBarViews;
