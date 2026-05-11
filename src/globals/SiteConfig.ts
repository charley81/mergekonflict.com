import type { GlobalConfig } from 'payload'

export const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'merge konflict',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Dark Techstep & Amen Heavy DNB',
    },
    {
      name: 'heroBackground',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Background (Image)',
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'SoundCloud', value: 'soundcloud' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Bandcamp', value: 'bandcamp' },
            { label: 'Twitch', value: 'twitch' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Lucide icon name (optional)',
          },
        },
      ],
    },
  ],
}
