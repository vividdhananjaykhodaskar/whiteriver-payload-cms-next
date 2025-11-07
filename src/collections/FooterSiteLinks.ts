import type { CollectionConfig } from 'payload'

export const FooterSiteLinks: CollectionConfig = {
  slug: 'footer-site-links',
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'links',
      label: 'Footer Links',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Link Title',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Link URL',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
  ],
}
