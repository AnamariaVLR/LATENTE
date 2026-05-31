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
    rights: string;
    languageLabel: string;
  };

  inquire: {
    metaTitle: string;
    metaDescription: string;
    backHome: string;
    eyebrow: string;
    title: string;
    intro: string;
    fields: {
      name: string;
      company: string;
      role: string;
      email: string;
      country: string;
      interest: string;
      interestDefault: string;
      message: string;
    };
    interestOptions: {
      house: string;
      bespoke: string;
      partnership: string;
    };
    optionalLabel: string;
    submit: string;
    success: { title: string; body: string; back: string };
  };
}
