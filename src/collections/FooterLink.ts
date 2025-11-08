import type { CollectionConfig } from 'payload'

export const FooterLink : CollectionConfig = {
  slug: 'footer-link',
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
