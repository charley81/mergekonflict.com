import type { CollectionConfig } from 'payload'

export const Shows: CollectionConfig = {
  slug: 'shows',
  admin: {
    useAsTitle: 'venueName',
    defaultColumns: ['date', 'venueName', 'location'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Date',
    },
    {
      name: 'venueName',
      type: 'text',
      required: true,
      label: 'Venue Name',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Location',
    },
    {
      name: 'time',
      type: 'text',
      required: true,
      label: 'Time',
    },
    {
      name: 'ticketUrl',
      type: 'text',
      label: 'Ticket URL',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
  ],
}
