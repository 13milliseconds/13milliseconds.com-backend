import carousel from '../blocks/carousel'

export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
            {
                type: 'block'
            },
            {
                type: 'image'
            },
            carousel
        ]
    }
    ]
  }