import React, {Fragment} from 'react'
import Layout from "../../styles/layout-styles";
import Img from "../../styles/img-styles";
import Text from "../../styles/text-styles";
import ModestLink from "../../widgets/ModestLink";
import useHover from "../../utils/useHover";

const itemPlr = 1.3;

function ImgAndLink({src, title, text, path}) {
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
          borderRadius={'50%'}
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
          <ModestLink to={path}>
            <Text.P
              ml={.2}
              emotion='hipBlue'
              mt={.1}>
              {text}
            </Text.P>
          </ModestLink>
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

function ClickableRow({icon, text, path, callback}){
  const [ref, isHovering] = useHover();
  const Wrapper = callback ?
    ({children}) => <Fragment>{children}</Fragment> :
    ({children}) => <ModestLink to={path}>{children}</ModestLink>
  ;

  return(
    <Wrapper>
      <Layout.Div
        onClick={callback}
        ref={ref}
        mt={.8}
        plr={itemPlr}
        flex
        align='center'>
        <Text.Icon
          bold={isHovering}
          emotion='warning2'
          name={icon}
          size={.66}
        />
        <Text.P
          mt='1px'
          calm
          point={isHovering}
          bold={isHovering}
          ml={.4}>
          {text}
        </Text.P>
      </Layout.Div>
    </Wrapper>
  )
}

const TopBarViews = {
  ImgAndLink,
  ClickableRow,
  Separator
}

export default TopBarViews;
