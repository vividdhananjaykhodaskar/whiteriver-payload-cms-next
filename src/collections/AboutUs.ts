import type { GlobalConfig } from 'payload'

export const AboutUs: GlobalConfig = {
  slug: 'about-us',
  label: 'About Us',
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'sectionLabel',
      label: 'Section Label',
      type: 'text',
      required: true,
      defaultValue: 'ABOUT US',
    },
    {
      name: 'title',
      label: 'Main Title',
      type: 'text',
      required: true,
      defaultValue: 'Your home for quality railroad books and magazines! All aboard!',
    },
    {
      name: 'cta',
      label: 'CTA Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          defaultValue: 'More About Us',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          defaultValue: '/about',
        },
      ],
    },
    {
      name: 'magazineCovers',
      label: 'Magazine Covers',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'coverImage',
          label: 'Cover Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'stats',
      label: 'Statistics Section',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'highlightText',
          label: 'Highlighted Text (e.g., 125 or 1000+)',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Title (e.g., Years Experience)',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
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
