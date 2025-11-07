import type { CollectionConfig } from 'payload'

export const Navigation: CollectionConfig = {
  slug: 'navigation',
  admin: {
    useAsTitle: 'label',
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Order in which the navigation item appears',
      },
    },
    {
      name: 'isExternal',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Check if this link goes to an external site',
      },
    },
  ],
}