import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
   access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'subtitles',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Display order of the service',
      },
    },
    {
      name: 'animationDelay',
      type: 'text',
      defaultValue: '0.2s',
      admin: {
        description: 'Animation delay for the service box',
      },
    },
  ],
}