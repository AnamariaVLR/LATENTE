import type { Dictionary } from './types';

// =============================================================================
// العربية — PLACEHOLDER COPY. DO NOT SHIP AS-IS.
//
// ⚠  This is an UNVERIFIED machine-quality draft, provided only to scaffold the
//    Arabic (RTL) locale so layout, mirroring and typography can be validated.
//    Every string MUST be professionally translated and reviewed by a native
//    Arabic copywriter before launch. See README → "Completing the translations".
//
// Brand names (LATENTE, the three edition names) are intentionally left in Latin
// script — confirm transliteration preferences with the owner.
// =============================================================================
const ar: Dictionary = {
  htmlLang: 'ar',
  dir: 'rtl',

  meta: {
    title: 'LATENTE — برنامج القهوة المميّز',
    description:
      'تصمّم LATENTE برامج قهوة كولومبية مختصة ومخصّصة للضيافة الرفيعة — القهوة بوصفها ثقافة وهوية وطقساً.',
    ogAlt: 'LATENTE — منظر ضبابي لأشجار نخيل الشمع في وادي كوكورا.',
  },

  nav: {
    home: 'الرئيسية',
    inquire: 'استفسار',
    skip: 'تخطَّ إلى المحتوى',
  },

  langNames: { en: 'English', es: 'Español', ar: 'العربية' },

  hero: {
    wordmarkAlt: 'LATENTE',
    eyebrow: 'برنامج القهوة المميّز',
    tagline: 'قهوة كولومبية منتقاة',
    inquire: 'استفسار',
    scroll: 'انزل',
  },

  program: {
    eyebrow: 'برنامج القهوة المميّز',
    title: 'ثلاث حركات',
    movements: [
      {
        numeral: '١',
        title: 'التعريف الحسّي',
        body: 'نحدّد الأجواء والقيم والرسالة العاطفية التي يختبرها عملاؤكم.',
      },
      {
        numeral: '٢',
        title: 'تطوير الملمح',
        body: 'ننتقي أصول القهوة وأصنافها وملامحها بما يجسّد طابع علامتكم وموقعها.',
      },
      {
        numeral: '٣',
        title: 'تصميم برنامج مخصّص',
        body: 'نبني تجربة قهوة متناسقة تضمن الاتساق والرسوخ في الذاكرة والتميّز على المدى الطويل.',
      },
    ],
  },

  houseCoffees: {
    eyebrow: 'قهوات الدار',
    title: 'ثلاث إصدارات',
    editions: [
      {
        no: 'رقم ٠١',
        name: 'The High Bloom',
        lines: [
          'منتقاة من مزارع مرتفعة في جنوب هويلا ونارينيو، حيث يمنح النضج البطيء صفاءً وانطلاقة.',
          'بنفحات من الأزهار البيضاء والفاكهة ذات النواة وحموضة مشرقة.',
          'مصمّمة للمساحات التي تُعلي من شأن الضوء والصمت والحضور.',
        ],
        image: '/images/essence-coffee-blossom.jpg',
        alt: 'أزهار القهوة في ضوء ناعم في مزرعة مرتفعة.',
      },
      {
        no: 'رقم ٠٢',
        name: 'The Cacao Ground',
        lines: [
          'منتقاة من أراضٍ متوسطة الارتفاع في أنتيوكيا وشمال توليما، حيث تمنح التربة البركانية عمقاً وبنية.',
          'بنفحات من قشر الكاكاو واللوز المحمّص وحلاوة الكراميل والتوابل الناعمة.',
          'مصمّمة للمساحات التي تقدّر الدفء والخامة والإحساس بالرسوخ.',
        ],
        image: '/images/coffee-02-cacao-ground.jpg',
        alt: 'أوراق داكنة بلون الكاكاو وقهوة محمّصة.',
      },
      {
        no: 'رقم ٠٣',
        name: 'The Ferment Light',
        lines: [
          'منتقاة من دفعات صغيرة تجريبية في كاوكا وهويلا، حيث يُدخل التخمير المطوّل تحوّلاً دقيقاً.',
          'بنفحات من الفاكهة الاستوائية والتوت الأحمر وتعقيد عطري لطيف دون إفراط.',
          'مصمّمة للمساحات المنفتحة على التنويع والإبداع والتعبير المعاصر.',
        ],
        image: '/images/coffee-03-ferment-light.jpg',
        alt: 'كرز قهوة ناضج في ضوء الصباح.',
      },
    ],
  },

  bespoke: {
    eyebrow: 'تجربة مخصّصة',
    title: 'إلى ما هو أبعد من قهوات الدار',
    body: 'إلى ما هو أبعد من قهوات الدار، تصوغ LATENTE ملمح قهوة مخصّصاً يتلاءم مع علامة العميل وأجوائه وهويته — يُطوَّر بخصوصية، عبر الحوار.',
    link: 'ابدأ محادثة',
  },

  hospitality: {
    body: 'ثقافة . هوية . طقس',
    alt: 'فضاء ضيافة راقٍ في ضوء دافئ هادئ.',
  },

  philosophy: {
    eyebrow: 'فلسفة الشراكة',
    body: 'في LATENTE — نعمل بعيداً عن منطق الحجم. نُؤثِر الجودة على الانتشار.',
  },

  inquiryCall: {
    line: 'لمجموعات الضيافة والمشغّلين الرفيعين.',
    cta: 'اطلب محادثة خاصة',
  },

  footer: {
    email: 'hello@latente.coffee',
    dossier: 'اطلب الملف الكامل',
    rights: 'LATENTE. جميع الحقوق محفوظة.',
    languageLabel: 'اللغة',
  },

  inquire: {
    metaTitle: 'استفسار — LATENTE',
    metaDescription:
      'اطلب محادثة خاصة مع LATENTE حول برنامج قهوة كولومبية مختصة مخصّص لمنشأتك.',
    backHome: 'رجوع',
    eyebrow: 'استفسار خاص',
    title: 'اطلب محادثة خاصة',
    intro:
      'نعمل مع عدد محدود من الشركاء في كل مرة. أخبِرنا قليلاً عن منشأتك وسنتواصل معك بخصوصية.',
    fields: {
      name: 'الاسم',
      company: 'الشركة / المنشأة',
      role: 'المنصب',
      email: 'البريد الإلكتروني',
      country: 'الدولة',
      interest: 'مجال الاهتمام',
      interestDefault: 'يُرجى الاختيار',
      message: 'الرسالة',
    },
    interestOptions: {
      house: 'قهوات الدار',
      bespoke: 'برنامج مخصّص',
      partnership: 'شراكة ضيافة',
    },
    optionalLabel: 'اختياري',
    submit: 'إرسال الاستفسار',
    success: {
      title: 'شكراً لك.',
      body: 'سنتواصل معك بخصوصية.',
      back: 'العودة إلى الرئيسية',
    },
  },
};

export default ar;
