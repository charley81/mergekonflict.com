import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'artistPhoto',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'bio',
      type: 'richText',
      required: true,
    },
  ],
}
