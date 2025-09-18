import {defineType} from 'sanity'

export const youtubeEmbedType = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare(selection) {
      const {url} = selection
      return {
        title: 'YouTube Video',
        subtitle: url,
      }
    },
  },
})
