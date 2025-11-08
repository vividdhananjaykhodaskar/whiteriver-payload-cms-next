import type { CollectionConfig } from 'payload';

export const FooterMenu: CollectionConfig = {
  slug: 'footer-menu',
  labels: {
    singular: 'Footer Menu',
    plural: 'Footer Menu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      label: 'Section Title', // e.g. "Menu" or "Services"
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Link Title', // e.g. "About Us", "Careers"
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Link URL', // e.g. "/about-us"
        },
      ],
    },
  ],
};
