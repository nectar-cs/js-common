import React from 'react'
import Text from '../../styles/text-styles'
import Layout from '../../styles/layout-styles'

export default function CategoriesBar({items}){
  return(
    <Layout.Div width='205px'>
      { items.map((item, i) => (
        <Layout.Div key={i}>
          <Layout.Div
            flex
            vertSwell={2.5}
            horSwell={1}
            style={{justifyContent: 'space-between'}}
            onClick={item.callback}
            hoverPoint
            hoverBkgEmotion='grey3'>
            <Text.Icon
              name={item.icon}
              emotion='primaryColor'
            />
            <Text.H4
              mt={.2}
              style={{textAlign: 'left'}} width='140px' >
              { item.name }
            </Text.H4>
          </Layout.Div>
          { i !== items.length -1 &&
            <Layout.Div height={'1px'} emotion='transparent' />
          }
        </Layout.Div>
      )) }
    </Layout.Div>
  )
}
