import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";

export default function TabsView(props){
  const { descriptors, onTabSelected, crtIndex } = props;
  const { pProps, iconProps, tabProps } = props;

  return(
    <Layout.Div
      relative
      height={'40px'}
      width={'100%'}>
      <Layout.Div
        absolute
        right={0}
        bottom={0}
        left={0}
        height='1px'
        emotion='grey3'
      />
      <Layout.Div
        absolute
        flex
        top={0}
        right={0}
        bottom={'1.5px'}
        left={0}
        >
        { descriptors.map((desc, i) => (
          <Layout.Div
            key={i}
            flex
            onClick={_ => onTabSelected ? onTabSelected(i) : null}
            hoverBkgEmotion={'calmBeige'}
            hoverPoint
            align='center'
            pl={1.5}
            pr={1.5}
            height='100%'
            borderRadius={'4px 4px 0 0'}
            borderStyle='none none solid none'
            borderEmotion={i === crtIndex ? 'warning2' : 'transparent'}
            borderWidth='2px'
            {...tabProps}
          >
            <Text.Icon
              name={desc.icon}
              size={.9}
              {...iconProps}
            />
            <Text.P
              ml={.6}
              {...pProps}>
              { desc.name }
            </Text.P>
          </Layout.Div>
        )) }
      </Layout.Div>
    </Layout.Div>
  )
}

TabsView.defaultProps = {
  crtIndex: 0,
  pProps: {},
  iconProps: {},
  tabProps: {}
}
