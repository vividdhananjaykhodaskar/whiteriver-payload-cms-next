import { CollectionConfig } from "payload";

export const FooterLinks: CollectionConfig = {
  slug: "footer-links",

  admin: {
    useAsTitle: "label",
  },

  access: {
    read: () => true, // Public read
  },

  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "url",
      type: "text",
      required: true,
    },
    {
      name: "order",
      type: "number",
      required: true,
      admin: {
        description: "Order in which the footer link should appear",
      },
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Enable to show this link in the footer",
      },
    },
  ],

  // OPTIONAL — helps sort in admin UI
  defaultSort: "-order",
};
