import React from 'react'
import styled from 'styled-components'
import Layout from "../styles/layout-styles";
import Text from "../styles/text-styles";

const ImgSide = styled.img`
 position: absolute;
 width: ${p => p.size}px;
 height: ${p => p.size}px;
 clip: rect(0px, ${p => p.size / 2 - p.space / 2}px, ${p => p.size}px, 0px);
 object-fit: cover;
`;

const IconSide = styled(Text.CuckIcon)`
  position: absolute;
  text-align: center;
  padding-top: 10px;
  
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  clip: rect(0px, ${p => p.size}px, ${p => p.size}px, ${p => (p.size / 2) + (p.space / 2)}px);
  font-size: 50px;
`;

export default function TwoFace({imgSrc, iconName, size, space, iconProps}){
  return(
    <Layout.Div
      relative
      width={`${size}px`}
      height={`${size}px`}
    >
      <ImgSide
        src={imgSrc}
        space={space}
        size={size}
      />
      <IconSide
        className='material-icons'
        space={space}
        size={size}
        {...iconProps}>
        { iconName }
      </IconSide>

    </Layout.Div>
  )
}

TwoFace.defaultProps = {
  space: 2,
  size: 60
}
