import type { Dictionary } from './types';
import { INQUIRY_EMAIL } from '../config';

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
    body: 'Culture . Identity . Ritual',
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
    email: INQUIRY_EMAIL,
    dossier: 'Request the full dossier',
    privacy: 'Privacy',
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
    groups: {
      you: 'About you',
      property: 'Your property',
      conversation: 'The conversation',
    },
    fields: {
      name: 'Name',
      company: 'Company / Property',
      role: 'Role',
      email: 'Email',
      phone: 'Phone',
      country: 'Country / City',
      propertyType: 'Type of property',
      propertyTypeDefault: 'Please select',
      rooms: 'Number of properties or rooms',
      interest: 'Area of interest',
      interestDefault: 'Please select',
      currentProgram: 'Current coffee program',
      timeline: 'Timeline',
      timelineDefault: 'Please select',
      message: 'Message',
    },
    interestOptions: {
      house: 'House Coffees',
      bespoke: 'Bespoke Program',
      partnership: 'Hospitality Partnership',
      dossier: 'Request the full dossier',
    },
    propertyTypes: {
      hotelGroup: 'Hotel group',
      boutique: 'Boutique hotel',
      restaurant: 'Restaurant',
      club: 'Members club',
      other: 'Other',
    },
    timelines: {
      exploring: 'Exploring',
      months: 'Within 3–6 months',
      now: 'Ready now',
    },
    consent: {
      before: 'I agree that LATENTE may store and use these details to respond to my inquiry, as described in the ',
      privacyLink: 'privacy notice',
      after: '.',
    },
    optionalLabel: 'optional',
    submit: 'Send Inquiry',
    sending: 'Sending…',
    error: 'Something went wrong. Please try again, or write to us directly.',
    success: {
      title: 'Thank you.',
      body: 'We will be in touch privately.',
      back: 'Return home',
    },
  },

  privacy: {
    metaTitle: 'Privacy — LATENTE',
    metaDescription: 'How LATENTE handles the details you share when you make an inquiry.',
    eyebrow: 'Privacy Notice',
    title: 'How we handle your details',
    updated: 'Last updated: {date}',
    notice:
      'This notice is a starting template and must be reviewed by legal counsel before launch.',
    sections: [
      {
        title: 'What we collect',
        body: 'When you submit an inquiry we receive the details you enter — your name, role, company or property, contact details, and the message you write. We do not use tracking cookies.',
      },
      {
        title: 'Why we use it',
        body: 'Solely to respond to your inquiry and, where a conversation continues, to prepare a proposal. We do not sell or share your details with third parties for marketing.',
      },
      {
        title: 'Where it is stored',
        body: 'Submissions are delivered to our private inbox and held in our website host’s form service. We keep them only as long as needed to handle your inquiry and any resulting relationship.',
      },
      {
        title: 'Your rights',
        body: 'You may ask us at any time to see, correct, or delete the details we hold about you. Write to us at the address in the footer and we will act promptly.',
      },
    ],
  },
};

export default en;
