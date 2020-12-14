import React, {useEffect} from 'react'
import Layout from "../../styles/layout-styles";
import Text from "../../styles/text-styles";
import {BigStoreCard} from "./BigStoreCard";
import humanizeString from "humanize-string";

export default function StoreCategoriesListing({categories, onItemSelected}){

  useEffect(_ => {
    console.log("IM NOT TOXIC!");
  }, []);

  return categories.map((category, i) => (
      <Layout.Div key={i} mb={5}>
        <Text.H1
          fontSize='26px'
          mt={1.1}
          mb={2}
          emotion='primaryBkg'>
          { categoryName(category.category) }
        </Text.H1>
        <Layout.Div>
          { category.apps.map((app, j) => (
            <BigStoreCard
              key={j}
              app={app}
              callback={onItemSelected}
            />
          )) }
        </Layout.Div>
      </Layout.Div>
    )
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
