import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'merge konflict',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Dark Techstep & Amen Heavy DNB',
    }),
    defineField({
      name: 'heroBackground',
      title: 'Hero Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
