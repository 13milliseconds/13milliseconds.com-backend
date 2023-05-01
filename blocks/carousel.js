export default {
    name: 'carousel',
    title: 'Carousel',
    type: 'object',
    fields: [
      {
        name: 'slider',
        title: 'Slider',
        type: 'array',
        of: [
          {
            name: 'slide',
            title: 'Slide',
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image'
              }
            ]
          }
        ]
      }
    ]
  }