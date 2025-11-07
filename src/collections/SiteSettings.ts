import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
   access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'siteLogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: 'White River Productions',
    },
    {
      name: 'sectionHeadings',
      type: 'group',
      fields: [
        {
          name: 'services',
          type: 'text',
          defaultValue: 'Our Services',
        },
        {
          name: 'magazines',
          type: 'text',
          defaultValue: 'Our Magazines',
        },
        {
          name: 'contact',
          type: 'text',
          defaultValue: 'Get in touch',
        },
        {
          name: 'otherSites',
          type: 'text',
          defaultValue: 'Our Other Sites',
        },
      ],
    },
  ],
}