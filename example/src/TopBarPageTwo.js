import React from 'react'
import {ThemeProvider} from "styled-components";
import faker from 'faker';
import {Layout, AppLayout, TopBar, noSideBarTheme, ProductView, AppListingContext} from "nectar-gui";

export default function TopBarPageTwo() {
  return (
    <ThemeProvider theme={noSideBarTheme}>
      <AppLayout
        SideBar={null}
        TopBar={TopBar}>
        <Layout.PageWithoutHeader>
          <AppListingContext.Provider value={{app: dummyApp}}>
            <ProductView/>
          </AppListingContext.Provider>
          <Layout.Div height={5}/>
        </Layout.PageWithoutHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function dummyFeatures(){
  return [...Array(5).keys()].map(i => ({
    name: faker.commerce.productName(),
    info: faker.lorem.paragraph()
  }))
}

const clusterFootprint = {
  workload_sets: '~12',
  persistent_stores: '>3',
  resource_definitions: '2',
  web_interfaces: '1',
  total_resources: '18',
}

const links = [
  { name: 'Application GitHub', url: "asdsasd" },
  { name: 'Community Helm Chart', url: "asdsasd" },
  { name: 'Discord', url: "asdsasd" }
]

const screenshotUrls = [
  "https://metro.co.uk/wp-content/uploads/2020/06/EZmvSUTXkAE1ljO-39e4.jpg?quality=90&strip=all",
  "https://cdn.mos.cms.futurecdn.net/oPgkUec8rT66PwZzxZ7fZj-1200-80.png"
];

const plansData = [
  {
    name: "Free Tier",
    info: faker.company.catchPhrase(),
    price: 0,
    features: [...Array(5).keys()].map(_ => faker.commerce.productName())
  },
  {
    name: "Yearly Pro",
    info: faker.company.catchPhrase(),
    price: 1200,
    features: [...Array(5).keys()].map(_ => faker.commerce.productName())
  }
];

const requirements = {
  cluster_type: [
    'Google GKE',
    'Amazon EKS',
    'Microsoft AKS',
    "Bare Metal"
  ],
  cluster_features: [
    'Kubernetes API 1.16+',
    'RBAC',
    'Network Policies'
  ],
  software_and_services: [
    'Istio',
    'Prometheus'
  ],
  resources: [
    '1.4 Cores',
    '1Gb RAM',
    '10Gb Disk'
  ]
};

const wizFeatures = {
  operations: [
    '5-Stage Installation',
    'Database Lifecycle Management',
    'Network Configuration',
    'Stress Testing & Resilience'
  ],
  system_well_being: [
    '5-Stage Installation',
    'Database Lifecycle Management',
    'Network Configuration',
    'Stress Testing & Resilience'
  ],
  other_shit: [
    '5-Stage Installation',
    'Database Lifecycle Management',
    'Network Configuration',
    'Stress Testing & Resilience'
  ]
};

const benchmarks = [
  {
    name: 'Memory Consumed',
    xUnit: "R/s",
    yUnit: "Gb",
    dataPoints: [
      {
        "name": "10",
        "consumed": 0.342,
      },
      {
        "name": "50",
        "consumed": 0.342,
      },
      {
        "name": "100",
        "consumed": 0.678,
      },
      {
        "name": "200",
        "consumed": 1.122,
      },
      {
        "name": "500",
        "consumed": 2.324,
      },
      {
        "name": "1000",
        "consumed": 4.783,
      },
      {
        "name": "2000",
        "consumed": 6.998,
      }
    ]
  }
];

const dummyApp = {
  name: faker.commerce.productName(),
  info: faker.lorem.paragraphs(),
  logoUrl: 'https://img.icons8.com/color/452/nginx.png',
  oneLiner: faker.company.catchPhrase(),
  screenshotUrls: screenshotUrls,
  features: dummyFeatures(),
  usefulLinks: links,
  clusterFootprint: clusterFootprint,
  wizCapabilities: wizFeatures,
  requirements: requirements,
  benchmarks: benchmarks,
  plans: plansData,
  rbacPolicies: require('./fakeperms.json')
}
