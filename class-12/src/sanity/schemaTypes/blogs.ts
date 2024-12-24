
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of the blog post.',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'The slug of the blog post.',
      
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'The image of the blog post.',
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
        description: 'The heading of the blog post.',
      },
      {
        name: 'content',
        title : 'Content',
        type: 'string',
        description: 'The content of the blog post.',
      },

    ],
  };
  