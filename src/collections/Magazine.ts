import type { CollectionConfig } from 'payload'

export const Magazines: CollectionConfig = {
  slug: 'magazines',
  admin: {
    useAsTitle: 'name',
  },
   access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'websiteUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'shopUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show/hide this magazine on the website',
      },
    },
  ],
}