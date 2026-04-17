// Fork this file to customize for each client.
// All restaurant-specific values live here — swap them and rebuild.

export const RESTAURANT_CONFIG = {
  name: 'Saffron Kitchen',
  nameFarsi: 'سفران',
  tagline: 'Where ancient flavors meet modern artistry',
  taglineSecondary: 'Upscale Persian cuisine in Charlotte, NC',

  address: {
    street: '1247 Central Ave',
    city: 'Charlotte',
    state: 'NC',
    zip: '28204',
    full: '1247 Central Ave, Charlotte, NC 28204',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.9!2d-80.8229!3d35.2135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fd614d7f8e7%3A0x3f8ab7ef53b6c40e!2s1247%20Central%20Ave%2C%20Charlotte%2C%20NC%2028204!5e0!3m2!1sen!2sus!4v1713400000000!5m2!1sen!2sus',
  },

  contact: {
    phone: '(704) 790-9158',
    email: 'preview-saffron@tame.gg',
    instagram: '@tamegg',
  },

  hours: [
    { days: 'Tuesday – Thursday', hours: '5:00 PM – 10:00 PM' },
    { days: 'Friday – Saturday', hours: '5:00 PM – 11:00 PM' },
    { days: 'Sunday', hours: '4:00 PM – 9:00 PM' },
    { days: 'Monday', hours: 'Closed' },
  ],

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    yelp: 'https://yelp.com',
  },

  about: {
    shortBio: 'Born from a family kitchen in Urmia. Refined in Charlotte.',
    story: [
      'Saffron Kitchen began as a memory — the smell of slow-simmered ghormeh sabzi filling a small house, a grandmother\'s hands staining gold with turmeric, the quiet ritual of gathering around a sofreh. When founder Sahar Zandi brought those memories from Urmia to Charlotte\'s Central Avenue, she refused to leave them at the border.',
      'Every dish on our menu is an act of remembrance: meticulous, personal, and alive with the ancient Persian principle of ta\'arof — the art of making a guest feel more welcome than they ever expected. We source heritage saffron from Khorasan, barberries from family import, and lamb from farms within ninety miles of Charlotte.',
      'This is not fusion. This is Persian cuisine, cooked with full conviction, served in a room designed to hold a conversation.',
    ],
    pullQuote: 'غذا بزرگ‌ترین پل میان فرهنگ‌هاست',
    pullQuoteTranslation: '"Food is the greatest bridge between cultures."',
  },

  seo: {
    title: 'Saffron Kitchen | Upscale Persian Cuisine in Charlotte, NC',
    description:
      'Experience the art of Persian cuisine at Saffron Kitchen on Central Avenue in Charlotte, NC. Reservations available Tuesday through Sunday.',
    siteUrl: 'https://saffronkitchenclt.com',
  },
} as const
