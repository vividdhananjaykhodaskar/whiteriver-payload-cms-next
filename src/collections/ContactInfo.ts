import type { GlobalConfig } from 'payload'

export const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
   access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
      defaultValue: 'White River Productions',
    },
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'street',
          type: 'text',
          required: true,
          defaultValue: 'PO Box 48',
        },
        {
          name: 'city',
          type: 'text',
          required: true,
          defaultValue: 'Bucklin',
        },
        {
          name: 'state',
          type: 'text',
          required: true,
          defaultValue: 'MO',
        },
        {
          name: 'zip',
          type: 'text',
          required: true,
          defaultValue: '64631',
        },
      ],
    },
    {
      name: 'phones',
      type: 'group',
      fields: [
        {
          name: 'tollFree',
          type: 'text',
          required: true,
          defaultValue: '(877) 787-2467',
        },
        {
          name: 'overseas',
          type: 'text',
          required: true,
          defaultValue: '(816) 285-6560',
        },
      ],
    },
    {
      name: 'emails',
      type: 'group',
      fields: [
        {
          name: 'customerService',
          type: 'email',
          required: true,
          defaultValue: 'info@whiteriverproductions.com',
        },
        {
          name: 'subscriptions',
          type: 'email',
          required: true,
          defaultValue: 'subs@whiteriverproductions.com',
        },
        {
          name: 'webmaster',
          type: 'email',
          required: true,
          defaultValue: 'webmaster@whiteriverproductions.com',
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          defaultValue: 'https://www.facebook.com/WhiteRiverProductions',
        },
      ],
    },
  ],
}