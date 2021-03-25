import React from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
import Clickable from "../../widgets/Clickable";

const itemPlr = 1.3;

function ImgAndLink({src, title, text, textEmotion, status, statusEmotion, configIcon, ...rest}) {
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
        <Layout.Div flex>
          <Text.P humane bold>
            {title}
          </Text.P>
          { status && (
            <Text.StatusTag
              bold
              ml={'6px'}
              pt={'1px'}
              pb={'0px'}
              mt={'-.5px'}
              borderRadius='2.5px'
              plr={'7px'}
              emotion='white'
              bkgEmotion={statusEmotion}>
              { status }
            </Text.StatusTag>
          ) }
        </Layout.Div>

        <Layout.Div flex align='center'>
          { configIcon && (
            <Text.Icon
              name={configIcon}
              size={.7}
              mr={.2}
              emotion='hipBlue'
            />
          ) }
          <Clickable {...rest}>
            <Text.P
              emotion={textEmotion}
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

ImgAndLink.defaultProps = {
  configIcon: 'tune',
  textEmotion: 'hipBlue'
}

const TopBarViews = {
  ImgAndLink,
  ClickableRow,
  Separator
}

export default TopBarViews;
