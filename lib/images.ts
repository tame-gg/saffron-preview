// All image URLs are centralized here.
// When you land a client, swap Unsplash URLs for real photography.
// Unsplash images can be previewed at https://unsplash.com/photos/{id}
//
// STOCK IMAGES NOTICE: All images used in this demo are stock photography
// sourced from Unsplash. All rights belong to their respective photographers
// and are used here for demonstration purposes only. Replace with licensed or
// original photography before deploying to production.

export const IMAGES = {
  hero: {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=85',
    alt: 'An elegantly plated Persian feast spread across a dark stone table at Saffron Kitchen',
  },

  about: {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Chef preparing Persian herbs and spices in the Saffron Kitchen',
  },

  featured: [
    {
      src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85',
      alt: 'Slow-braised lamb shank with saffron rice and dried limes',
      label: 'Lamb Shank',
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85',
      alt: 'Traditional Persian herb and walnut spread with warm flatbread',
      label: 'Kashk-e Bademjan',
    },
    {
      src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=800&q=85',
      alt: 'Artfully grilled koobideh kabab with saffron butter and grilled tomato',
      label: 'Koobideh',
    },
  ],

  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=85',
      alt: 'Elegant candlelit interior of Saffron Kitchen dining room',
      wide: true,
      tall: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=85',
      alt: 'Saffron-glazed lamb shank with jeweled barberry rice',
      wide: false,
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=85',
      alt: 'House mezze selection with warm sangak',
      wide: false,
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=85',
      alt: 'Persian herbs and aromatic garnishes',
      wide: false,
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=600&q=85',
      alt: 'Signature koobideh kabab over charcoal',
      wide: false,
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
      alt: 'Persian feast spread across a traditional sofreh',
      wide: true,
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=85',
      alt: 'Bar and lounge area at Saffron Kitchen',
      wide: false,
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=600&q=85',
      alt: 'Sholeh zard saffron rice pudding with rose petals and pistachios',
      wide: false,
      tall: false,
    },
  ],
} as const
