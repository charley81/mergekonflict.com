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
    defineField({
      name: 'aboutBio',
      title: 'About Bio',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'soundcloudPlaylistUrl',
      title: 'SoundCloud Playlist URL',
      type: 'url',
    }),
    defineField({
      name: 'soundcloudProfileUrl',
      title: 'SoundCloud Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', type: 'string', title: 'Platform Name'},
            {name: 'url', type: 'url', title: 'URL'},
            {name: 'icon', type: 'string', title: 'Icon Name (Hugeicons)', description: 'e.g. InstagramIcon, SoundCloudIcon'},
          ],
        },
      ],
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Footer Copyright',
      type: 'string',
      initialValue: '© {year} merge konflict. All rights reserved.',
    }),
  ],
})
