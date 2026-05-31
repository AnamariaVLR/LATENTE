import type { Dictionary } from './types';

// English — the canonical, fully-written copy. All other locales mirror this shape.
const en: Dictionary = {
  htmlLang: 'en',
  dir: 'ltr',

  meta: {
    title: 'LATENTE — Signature Coffee Program',
    description:
      'LATENTE designs bespoke Colombian specialty coffee programs for refined hospitality — coffee approached as culture, identity, and ritual.',
    ogAlt: 'LATENTE — misty wax-palm landscape of the Cocora Valley.',
  },

  nav: {
    home: 'Home',
    inquire: 'Inquire',
    skip: 'Skip to content',
  },

  langNames: { en: 'English', es: 'Español', ar: 'العربية' },

  hero: {
    wordmarkAlt: 'LATENTE',
    eyebrow: 'Signature Coffee Program',
    tagline: 'Curated Colombian Coffee',
    inquire: 'Inquire',
    scroll: 'Scroll',
  },

  opening: {
    body: 'We source, develop and place Colombian Specialty Coffee, approached as culture, identity, and ritual.',
  },

  essence: {
    eyebrow: 'Essence',
    body: 'Carefully cultivated and precisely roasted, LATENTE coffee reveals restrained energy and layered depth — designed for both quiet ritual and refined enjoyment.',
  },

  program: {
    eyebrow: 'The Signature Coffee Program',
    title: 'Three movements',
    movements: [
      {
        numeral: 'I',
        title: 'Sensory Definition',
        body: 'We define the atmosphere, values, and emotional message your clients experience.',
      },
      {
        numeral: 'II',
        title: 'Profile Development',
        body: "We curate coffee origins, varieties, and profiles that embody your brand's character and positioning.",
      },
      {
        numeral: 'III',
        title: 'Bespoke Program Design',
        body: 'We structure a coherent coffee experience, ensuring consistency, memorability, and long-term excellence.',
      },
    ],
  },

  houseCoffees: {
    eyebrow: 'The House Coffees',
    title: 'Three editions',
    editions: [
      {
        no: 'No. 01',
        name: 'The High Bloom',
        lines: [
          'Curated from high-altitude farms in southern Huila and Nariño, where slow maturation yields clarity and lift.',
          'Notes of white florals, stone fruit, and luminous acidity.',
          'Designed for spaces that privilege light, silence, and presence.',
        ],
        image: '/images/essence-coffee-blossom.jpg',
        alt: 'Coffee blossoms in soft light on a high-altitude farm.',
      },
      {
        no: 'No. 02',
        name: 'The Cacao Ground',
        lines: [
          'Curated from mid-altitude terrain in Antioquia and northern Tolima, where volcanic soils lend depth and structure.',
          'Notes of cacao husk, roasted almond, caramel sweetness, and soft spice.',
          'Designed for spaces that value warmth, materiality, and a sense of grounding.',
        ],
        image: '/images/coffee-02-cacao-ground.jpg',
        alt: 'Dark, cacao-toned foliage and roasted coffee.',
      },
      {
        no: 'No. 03',
        name: 'The Ferment Light',
        lines: [
          'Curated from experimental micro-lots in Cauca and Huila, where extended fermentation introduces subtle transformation.',
          'Notes of tropical fruit, red berries, and gentle aromatic complexity without excess.',
          'Designed for spaces open to nuance, creativity, and contemporary expression.',
        ],
        image: '/images/coffee-03-ferment-light.jpg',
        alt: 'Ripe coffee cherries with morning light.',
      },
    ],
  },

  bespoke: {
    eyebrow: 'Bespoke Experience',
    title: 'Beyond the house coffees',
    body: "Beyond the house coffees, LATENTE curates a bespoke coffee profile adjusted to a client's brand, atmosphere, and identity — developed privately, in conversation.",
    link: 'Begin a conversation',
  },

  hospitality: {
    body: 'Designed to inhabit refined spaces. Each edition is adapted to the atmosphere and identity of its environment.',
    alt: 'A refined hospitality interior in warm, muted light.',
  },

  philosophy: {
    eyebrow: 'Partnership Philosophy',
    body: 'At LATENTE — we work outside of scale. We privilege quality over reach.',
  },

  inquiryCall: {
    line: 'For hospitality groups and refined operators.',
    cta: 'Request a Private Conversation',
  },

  footer: {
    email: 'hello@latente.coffee',
    dossier: 'Request the full dossier',
    rights: 'LATENTE. All rights reserved.',
    languageLabel: 'Language',
  },

  inquire: {
    metaTitle: 'Inquire — LATENTE',
    metaDescription:
      'Request a private conversation with LATENTE about a bespoke Colombian specialty coffee program for your property.',
    backHome: 'Back',
    eyebrow: 'Private Inquiry',
    title: 'Request a Private Conversation',
    intro:
      'We work with a small number of partners at a time. Tell us a little about your property, and we will be in touch privately.',
    fields: {
      name: 'Name',
      company: 'Company / Property',
      role: 'Role',
      email: 'Email',
      country: 'Country',
      interest: 'Area of interest',
      interestDefault: 'Please select',
      message: 'Message',
    },
    interestOptions: {
      house: 'House Coffees',
      bespoke: 'Bespoke Program',
      partnership: 'Hospitality Partnership',
    },
    optionalLabel: 'optional',
    submit: 'Send Inquiry',
    success: {
      title: 'Thank you.',
      body: 'We will be in touch privately.',
      back: 'Return home',
    },
  },
};

export default en;
