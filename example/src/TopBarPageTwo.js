import React from 'react'
import {ThemeProvider} from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import faker from 'faker';
import {Layout,
  AppLayout,
  ErrorToast,
  FlexHeader,
  Img,
  Stepper,
  Button,
  Input,
  theme,
  TextOverLineSubtitle,
  SideBar,
  TopBar,
  noSideBarTheme,
  SmallStoreCard,
  CategoriesBar,
  Text,
  TagPool,
  colorKeys,
  ProductView,
  BigStoreCard
}
  from "nectar-gui";

const leftGutterWidth = '250px';

export default function TopBarPageTwo() {

  return (
    <ThemeProvider theme={noSideBarTheme}>
      <AppLayout
        SideBar={null}
        TopBar={TopBar}>
        <Layout.PageWithoutHeader>
          <ProductView
            name='Nginx Enterprise'
            logoUrl='https://img.icons8.com/color/452/nginx.png'
            info={dummyInfo}
            screenshotUrls={screenshotUrls}
            features={dummyFeatures()}
            footprint={footprint}
            requirements={requirements}
            usefulLinks={links}
            plans={plansData}
            wizFeatures={wizFeatures}
            memData={memData}
            perms={require('./fakeperms.json')}
          />
          <Layout.Div height={5}/>
        </Layout.PageWithoutHeader>
      </AppLayout>
    </ThemeProvider>
  )
}

function dummyFeatures(){
  return [...Array(5).keys()].map(i => ({
    name: faker.commerce.productName(),
    info: faker.commerce.productDescription()
  }))
}

const footprint = [
  { value: '~12', subtitle: 'Workload Sets' },
  { value: '>3', subtitle: 'Persistent Stores' },
  { value: '2', subtitle: 'Resource Definitions' },
  { value: '1', subtitle: 'Web Interfaces' },
  { value: '19', subtitle: 'Total Resources' },
  { value: '50', subtitle: 'Manifest Variables' }

]

const links = [
  { name: 'Application GitHub', url: "asdsasd" },
  { name: 'Community Helm Chart', url: "asdsasd" },
  { name: 'Discord', url: "asdsasd" }
]

const dummyInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.`;

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
}

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

}

const memData = [
  {
    "name": "10 R/s",
    "uv": 0.342,
  },
  {
    "name": "50 R/s",
    "uv": 0.342,
  },
  {
    "name": "100 R/s",
    "uv": 0.678,
  },
  {
    "name": "200 R/s",
    "uv": 1.122,
  },
  {
    "name": "500 R/s",
    "uv": 2.324,
  },
  {
    "name": "1000 R/s",
    "uv": 4.783,
  },
  {
    "name": "2000 R/s",
    "uv": 6.998,
  }
];
