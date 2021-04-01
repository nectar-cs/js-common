import React from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import {BigStoreCard} from "./BigStoreCard";
import humanizeString from 'humanize-string'
import {TextOverLineSubtitle} from "./../TextOverLineSubtitle/TextOverLineSubtitle";


export default function StoreCategoriesListing({categories, View, HeaderView, ...rest}){
  return categories.map((category, i) => (
      <Layout.Div mb={5} key={i}>
        <HeaderView>
          { categoryName(category.category) }
        </HeaderView>
        <Layout.Div>
          { category.apps.map((app, j) => (
            <View
              key={j}
              app={app}
              {...rest}
            />
          )) }
        </Layout.Div>
      </Layout.Div>
    )
  )
}

function DefaultHeaderView({children}) {
  return(
    <Text.H1 mb='6px' fontSize='22px'>{children}</Text.H1>
  )
}

function categoryName(key){
  const predicted = categoryMapping[key];
  return predicted && predicted.name || humanizeString(key);
}

const categoryMapping = {
  observability: { icon: "bar_chart", name: "Observability" },
  storage: { icon: "storage", name: "Storage & Databases" },
  ai: { icon: 'scatter_plot', name: "AI & Crypto" },
  bi: { icon: 'insights', name: "Analytics & BI" },
  devops: { icon: 'code', name: "DevOps Tooling" },
  productivity: { icon: 'work_outline', name: "Productivity" },
  security: { icon: 'security', name: "Security" }
}

StoreCategoriesListing.defaultProps = {
  View: BigStoreCard,
  HeaderView: DefaultHeaderView
}
