import timeSeriesData from "./timeSeriesData";

const statusLine = {
  type: "Line",
  style: { mt: '9px' },
  elements: [
    {
      type: "Icon",
      name: "add",
      style: { emotion: "warning2", bold: true }
    },
    {
      type: "Text",
      text: "Status:",
      style: { bold: true }
    },
    {
      type: "Text",
      text: "This means war dude"
    }
  ]
};

function header({uri}) {
  return {
    type: "ThreePartHeader",
    graphic: {
      type: 'Image',
      uri,
    },
    title: {
      type: "Line",
      elements: [
        {
          type: "Text",
          text: "Big ass Title",
          style: { bold: true, fair: true }
        },
        {
          type: "Tag",
          text: "Status"
        }
      ]
    },
    subtitle: {
      type: "Text",
      text: "Subtitle"
    }
  };
}

const websiteBlock = {
  type: "Block",
  title: "Website",
  sections: [
    {
      type: "Section",
      width: 1,
      elements: [
        header({
          uri: "https://cdn.iconscout.com/icon/free/png-256/prometheus-282488.png"
        })
      ]

    },
    {
      type: "Section",
      width: 1,
      style: { mt: '-8px' },
      elements: [
        statusLine,
        statusLine,
        statusLine
      ]
    }
  ]
}

const websiteBlock2 = {
  type: "Block",
  title: "Website",
  sections: [
    {
      type: "Section",
      width: 1,
      elements: [
        header({
          uri: "https://cdn.auth0.com/blog/nginx-plus/nginx-logo.png",
        }),
        {
          type: "Line",
          style: { mt: '9px' },
          elements: [
            {
              type: "Text",
              text: "https://1.2.3.38:4992/show-yo-self",
              style: { hov_point: true, underline: true, emotion: 'pleasant' }
            }
          ]

        }
      ]
    },
    {
      type: "Section",
      width: 1,
      style: { mt: '-8px' },
      elements: [
        statusLine,
        statusLine
      ]
    }
  ]
}

const wideBlock = {
  type: "Block",
  title: "Resource Consumption",
  sections: [
    {
      type: "Section",
      width: 1,
      elements: [
        {
          type: "Text",
          text: "2.3 Cores",
          style: { fontSize: '20px', centered: true }
        }
      ]
    },
    {
      type: "Section",
      width: 1,
      elements: []
    },
    {
      type: "Section",
      width: 2,
      elements: [
        {
          type: 'TimeseriesGraph',
          data: timeSeriesData
        }
      ]
    }
  ]
}

export default {
  websiteBlock,
  websiteBlock2,
  wideBlock
}
