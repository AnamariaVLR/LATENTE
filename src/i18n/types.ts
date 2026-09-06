// Shared shape for every locale dictionary. Keeping this typed means a missing
// or renamed string is a build-time error, never a silent gap on the page.

export interface Movement {
  numeral: string;
  title: string;
  body: string;
}

export interface Edition {
  no: string;
  name: string;
  /** Four short lines: curation, notes, designed-for. */
  lines: string[];
  /** Local image filename in /public/images. */
  image: string;
  /** Descriptive alt text for the edition's backdrop. */
  alt: string;
}

export interface Dictionary {
  /** BCP-47 language tag for the <html lang> attribute. */
  htmlLang: string;
  /** Text direction. */
  dir: 'ltr' | 'rtl';

  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };

  nav: {
    home: string;
    inquire: string;
    skip: string;
  };

  /** Native names for the language switcher. */
  langNames: { en: string; es: string; ar: string };

  hero: {
    wordmarkAlt: string;
    eyebrow: string;
    tagline: string;
    inquire: string;
    scroll: string;
  };

  program: {
    eyebrow: string;
    title: string;
    movements: Movement[];
  };

  houseCoffees: {
    eyebrow: string;
    title: string;
    editions: Edition[];
  };

  bespoke: {
    eyebrow: string;
    title: string;
    body: string;
    link: string;
  };

  hospitality: {
    body: string;
    alt: string;
  };

  philosophy: { eyebrow: string; body: string };

  inquiryCall: { line: string; cta: string };

  footer: {
    email: string;
    dossier: string;
    notes: string;
    privacy: string;
    rights: string;
    languageLabel: string;
  };

  /** Field Notes — the monthly, data-led insight section and its archive page. */
  insights: {
    eyebrow: string;
    note: string;
    title: string;
    intro: string;
    monthly: string;
    readMore: string;
    archive: string;
    metaTitle: string;
    metaDescription: string;
    archiveTitle: string;
    archiveIntro: string;
    sources: string;
  };

  inquire: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    eyebrow: string;
    title: string;
    intro: string;
    /** Group headings that structure the calm, single-page form. */
    groups: { you: string; property: string; conversation: string };
    fields: {
      name: string;
      company: string;
      role: string;
      email: string;
      phone: string;
      country: string;
      propertyType: string;
      propertyTypeDefault: string;
      rooms: string;
      interest: string;
      interestDefault: string;
      currentProgram: string;
      timeline: string;
      timelineDefault: string;
      message: string;
    };
    interestOptions: {
      house: string;
      bespoke: string;
      partnership: string;
      dossier: string;
    };
    propertyTypes: {
      hotelGroup: string;
      boutique: string;
      restaurant: string;
      club: string;
      other: string;
    };
    timelines: { exploring: string; months: string; now: string };
    /** GDPR-style consent line; `privacyLink` is the anchor text inside it. */
    consent: { before: string; privacyLink: string; after: string };
    optionalLabel: string;
    submit: string;
    sending: string;
    error: string;
    success: { title: string; body: string; back: string };
  };

  privacy: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    updated: string;
    /** Clearly a template — must be reviewed by counsel before launch. */
    notice: string;
    sections: { title: string; body: string }[];
  };
}
