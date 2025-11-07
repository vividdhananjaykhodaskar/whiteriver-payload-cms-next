import type { CollectionConfig } from 'payload'

export const FooterSiteLinks : CollectionConfig = {
  slug: 'footer-site-links',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'isActive', 'url'],
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
      name: 'order',
      type: 'number',
      required: true,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },

    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'https://...',
      },
    },
  ],
}
