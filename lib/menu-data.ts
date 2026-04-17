export interface MenuItem {
  name: string
  nameFarsi?: string
  description: string
  price: string
  dietary?: Array<'vegetarian' | 'vegan' | 'gluten-free' | 'contains-nuts'>
  featured?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  nameFarsi: string
  subtitle: string
  items: MenuItem[]
}

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'mazeh',
    name: 'Mazeh',
    nameFarsi: 'مزه',
    subtitle: 'Small Plates & Starters',
    items: [
      {
        name: 'Kashk-e Bademjan',
        nameFarsi: 'کشک بادمجان',
        description:
          'Slow-roasted eggplant finished with aged kashk, crispy fried shallots, dried mint, and crushed walnuts. Served with warm sangak.',
        price: '$14',
        dietary: ['vegetarian', 'contains-nuts'],
        featured: true,
      },
      {
        name: 'Mast-o Khiar',
        nameFarsi: 'ماست و خیار',
        description:
          'House-cultured yogurt with Persian cucumber, dried rose petals, fresh mint, and a drizzle of toasted walnut oil.',
        price: '$10',
        dietary: ['vegetarian', 'gluten-free'],
      },
      {
        name: 'Dolmeh Barg',
        nameFarsi: 'دلمه برگ',
        description:
          'Grape leaves stuffed with saffron-spiced rice, currants, toasted pine nuts, and fresh herbs. Served warm with labne.',
        price: '$16',
        dietary: ['vegetarian', 'contains-nuts'],
      },
      {
        name: 'Mirza Ghasemi',
        nameFarsi: 'میرزا قاسمی',
        description:
          'Smoky fire-roasted eggplant with eggs, charred tomato, turmeric, and garlic. A northern Persian tradition, served with house bread.',
        price: '$15',
        dietary: ['vegetarian'],
      },
      {
        name: 'Ash-e Jow',
        nameFarsi: 'آش جو',
        description:
          'Barley and lentil soup with dried kashk, crispy mint oil, caramelized onions, and a bouquet of fresh herbs. Our house bread alongside.',
        price: '$13',
        dietary: ['vegetarian'],
      },
    ],
  },
  {
    id: 'kababs',
    name: 'Kababs',
    nameFarsi: 'کباب',
    subtitle: 'From the Charcoal Grill',
    items: [
      {
        name: 'Koobideh',
        nameFarsi: 'کوبیده',
        description:
          'Hand-formed ground lamb and beef with grated onion and Persian spices, grilled over charcoal. Served with saffron rice and grilled tomato.',
        price: '$36',
        featured: true,
      },
      {
        name: 'Barg',
        nameFarsi: 'برگ',
        description:
          'Tenderloin filet marinated overnight in saffron, lemon, and olive oil. Grilled over hardwood and finished with burnt butter.',
        price: '$52',
      },
      {
        name: 'Joojeh',
        nameFarsi: 'جوجه',
        description:
          'Half Springer chicken marinated in saffron, yogurt, lemon, and turmeric. Grilled over charcoal and served with zereshk polo.',
        price: '$38',
        dietary: ['gluten-free'],
      },
      {
        name: 'Shrimp Kabab',
        nameFarsi: 'کباب میگو',
        description:
          'Gulf shrimp marinated in saffron and barberry butter, skewered and grilled over charcoal. Served over herb-flecked rice with pickled sumac onions.',
        price: '$42',
        dietary: ['gluten-free'],
      },
    ],
  },
  {
    id: 'khoresh',
    name: 'Khoresh',
    nameFarsi: 'خورش',
    subtitle: 'Braised Stews & Slow-Cooked Dishes',
    items: [
      {
        name: 'Ghormeh Sabzi',
        nameFarsi: 'قورمه سبزی',
        description:
          'Slow-braised lamb with fenugreek, dried limes, kidney beans, and eight fresh herbs. Cooked four hours and served over basmati.',
        price: '$42',
        featured: true,
      },
      {
        name: 'Fesenjan',
        nameFarsi: 'فسنجان',
        description:
          'Braised duck in a rich pomegranate molasses and toasted walnut sauce. A regal dish from the Caspian coast.',
        price: '$46',
        dietary: ['gluten-free', 'contains-nuts'],
        featured: true,
      },
      {
        name: 'Lamb Shanks with Barberry',
        description:
          'Slow-braised lamb shank with barberries, caramelized onions, and Persian spices. Finished with saffron and dried rose.',
        price: '$52',
        dietary: ['gluten-free'],
      },
      {
        name: 'Khoresh-e Karafs',
        nameFarsi: 'خورش کرفس',
        description:
          'A bright herbal celery and lamb stew with parsley, mint, and sour dried limes. Light and unexpectedly complex.',
        price: '$40',
      },
    ],
  },
  {
    id: 'berenj',
    name: 'Berenj',
    nameFarsi: 'برنج',
    subtitle: 'Rice & Accompaniments',
    items: [
      {
        name: 'Chelo with Tahdig',
        nameFarsi: 'چلو با تهدیگ',
        description:
          'Saffron-perfumed basmati rice with a prized crispy tahdig crust. The cornerstone of every Persian table.',
        price: '$12',
        dietary: ['vegetarian', 'gluten-free'],
      },
      {
        name: 'Zereshk Polo',
        nameFarsi: 'زرشک پلو',
        description:
          'Jeweled rice with tart barberries, saffron, toasted almond slivers, and orange zest.',
        price: '$16',
        dietary: ['vegetarian', 'contains-nuts'],
      },
      {
        name: 'Sabzi Polo',
        nameFarsi: 'سبزی پلو',
        description:
          'Fragrant herb rice layered with fresh dill, parsley, cilantro, and fenugreek. A Nowruz tradition.',
        price: '$16',
        dietary: ['vegetarian', 'gluten-free'],
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    nameFarsi: 'دسر',
    subtitle: 'Sweet Endings',
    items: [
      {
        name: 'Sholeh Zard',
        nameFarsi: 'شله زرد',
        description:
          'Saffron and rose water rice pudding, garnished with crushed pistachios, cinnamon powder, and dried rose petals.',
        price: '$12',
        dietary: ['vegetarian', 'gluten-free', 'contains-nuts'],
        featured: true,
      },
      {
        name: 'Bastani',
        nameFarsi: 'بستنی',
        description:
          'Traditional Persian saffron ice cream with rose water, pistachio slivers, and salep for a stretchy, rich texture.',
        price: '$13',
        dietary: ['vegetarian', 'contains-nuts'],
      },
      {
        name: 'Zulbia-o Bamieh',
        nameFarsi: 'زولبیا و بامیه',
        description:
          'Persian funnel cake and donut fritters soaked in rose-scented honey syrup. Served warm with house clotted cream.',
        price: '$11',
        dietary: ['vegetarian'],
      },
    ],
  },
]
