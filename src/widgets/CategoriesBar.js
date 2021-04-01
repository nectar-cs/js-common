import React from 'react'
import Text from '../styles/text-styles'
import Layout from '../styles/layout-styles'

export default function CategoriesBar({items}){
  return(
    <Layout.Div width='180px'>
      { items.map((item, i) => (
        <Layout.Div key={i}>
          <Layout.Div
            flex
            ptb='12px'
            style={{justifyContent: 'space-between'}}
            onClick={item.callback}
            hov_point
            hov_bkgEmotion='soothing'>
            <Text.H4
              fontSize='13.5px'
              bold={i === 0}
              mt={'1px'}
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
