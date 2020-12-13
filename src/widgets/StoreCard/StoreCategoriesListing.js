import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import {BigStoreCard} from "./BigStoreCard";

export default function StoreCategoriesListing({categories}){
  return categories.map((category, i) => (
      <Layout.Div>
        <Text.H1 fontSize='26px' mt={1.1} mb={2} emotion='primaryBkg'>
          { category.category }
        </Text.H1>
        <Layout.Div>
          { category.apps.map((app, i) => (
            <BigStoreCard
              key={i}
              bkgEmotion={'#252a34'}
              logo={'https://img.icons8.com/color/452/nginx.png'}
              title={'MongoDB Enterprise'}
              info={}
              big={true}
              dark={true}
            />
          )) }
        </Layout.Div>
      </Layout.Div>
    )
  )
}
