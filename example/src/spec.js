const websiteBlock = {
  kind: "Block",
  title: "Website",
  sections: [
    {
      type: "Section",
      width: 1,
      elements: [
        {
          type: "ThreePartHeader",
          graphic: {
            type: 'Image',
            uri: "https://cdn.auth0.com/blog/nginx-plus/nginx-logo.png",
          },
          title: {
            type: "Line",
            elements: [
              {
                type: "Text",
                text: "Big ass Title",
                style: { bold: true }
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
        }
      ]
    },
    {
      type: "Section",
      width: 1,
      elements: [
        {
          type: "Line",
          elements: [
            {
              type: "Icon",
              name: "laptop",
              style: { emotion: "pleasant" }
            },
            {
              type: "Text",
              text: "This means war dude"
            }
          ]
        }
      ]
    }
  ]
}

export default {
  websiteBlock
}
