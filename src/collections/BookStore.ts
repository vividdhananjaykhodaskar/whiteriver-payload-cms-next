import type { CollectionConfig } from 'payload'

export const BookStore : CollectionConfig = {
  slug: 'book-store',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'category', 'featured'],
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
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
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
      name: 'buyLink',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'https://...',
      },
    },
  ],
}
