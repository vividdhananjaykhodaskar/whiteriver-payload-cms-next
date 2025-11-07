import type { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
  slug: 'hero-section',
   access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'mainHeading',
      type: 'text',
      required: true,
      defaultValue: 'WELCOME TO WHITE RIVER PRODUCTIONS',
    },
    {
      name: 'subHeading',
      type: 'text',
      required: true,
      defaultValue: "IF YOU LIKE RAILROADS, YOU'RE IN THE RIGHT PLACE",
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}