import type { Dictionary } from './types';

// -----------------------------------------------------------------------------
// Español — DRAFT translation.
// The owner is a native Spanish speaker and will refine this copy before launch.
// Image filenames are shared across locales and intentionally not translated.
// -----------------------------------------------------------------------------
const es: Dictionary = {
  htmlLang: 'es',
  dir: 'ltr',

  meta: {
    title: 'LATENTE — Programa de Café de Autor',
    description:
      'LATENTE diseña programas de café de especialidad colombiano a medida para la hospitalidad refinada — el café entendido como cultura, identidad y ritual.',
    ogAlt: 'LATENTE — paisaje brumoso de palmas de cera del Valle de Cocora.',
  },

  nav: {
    home: 'Inicio',
    inquire: 'Consultar',
    skip: 'Saltar al contenido',
  },

  langNames: { en: 'English', es: 'Español', ar: 'العربية' },

  hero: {
    wordmarkAlt: 'LATENTE',
    eyebrow: 'Programa de Café de Autor',
    tagline: 'Café Colombiano Curado',
    inquire: 'Consultar',
    scroll: 'Descender',
  },

  program: {
    eyebrow: 'El Programa de Café de Autor',
    title: 'Tres movimientos',
    movements: [
      {
        numeral: 'I',
        title: 'Definición Sensorial',
        body: 'Definimos la atmósfera, los valores y el mensaje emocional que experimentan sus clientes.',
      },
      {
        numeral: 'II',
        title: 'Desarrollo del Perfil',
        body: 'Curamos orígenes, variedades y perfiles de café que encarnan el carácter y el posicionamiento de su marca.',
      },
      {
        numeral: 'III',
        title: 'Diseño del Programa a Medida',
        body: 'Estructuramos una experiencia de café coherente, asegurando consistencia, memorabilidad y excelencia a largo plazo.',
      },
    ],
  },

  houseCoffees: {
    eyebrow: 'Los Cafés de la Casa',
    title: 'Tres ediciones',
    editions: [
      {
        no: 'N.º 01',
        name: 'The High Bloom',
        lines: [
          'Curado en fincas de gran altitud del sur del Huila y Nariño, donde la maduración lenta aporta claridad y elevación.',
          'Notas de flores blancas, fruta de hueso y una acidez luminosa.',
          'Concebido para espacios que privilegian la luz, el silencio y la presencia.',
        ],
        image: '/images/essence-coffee-blossom.jpg',
        alt: 'Flores de café bajo una luz suave en una finca de gran altitud.',
      },
      {
        no: 'N.º 02',
        name: 'The Cacao Ground',
        lines: [
          'Curado en terrenos de altitud media de Antioquia y el norte del Tolima, donde los suelos volcánicos aportan profundidad y estructura.',
          'Notas de cáscara de cacao, almendra tostada, dulzor de caramelo y especia suave.',
          'Concebido para espacios que valoran la calidez, la materialidad y un sentido de arraigo.',
        ],
        image: '/images/coffee-02-cacao-ground.jpg',
        alt: 'Follaje oscuro con tonos de cacao y café tostado.',
      },
      {
        no: 'N.º 03',
        name: 'The Ferment Light',
        lines: [
          'Curado en microlotes experimentales del Cauca y el Huila, donde la fermentación prolongada introduce una transformación sutil.',
          'Notas de fruta tropical, frutos rojos y una delicada complejidad aromática sin excesos.',
          'Concebido para espacios abiertos al matiz, la creatividad y la expresión contemporánea.',
        ],
        image: '/images/coffee-03-ferment-light.jpg',
        alt: 'Cerezas de café maduras con la luz de la mañana.',
      },
    ],
  },

  bespoke: {
    eyebrow: 'Experiencia a Medida',
    title: 'Más allá de los cafés de la casa',
    body: 'Más allá de los cafés de la casa, LATENTE crea un perfil de café a medida, ajustado a la marca, la atmósfera y la identidad de cada cliente — desarrollado de forma privada, en conversación.',
    link: 'Iniciar una conversación',
  },

  hospitality: {
    body: 'Cultura . Identidad . Ritual',
    alt: 'Un interior de hospitalidad refinado bajo una luz cálida y tenue.',
  },

  philosophy: {
    eyebrow: 'Filosofía de Asociación',
    body: 'En LATENTE — trabajamos al margen de la escala. Privilegiamos la calidad sobre el alcance.',
  },

  inquiryCall: {
    line: 'Para grupos hoteleros y operadores refinados.',
    cta: 'Solicitar una Conversación Privada',
  },

  footer: {
    email: 'hello@latente.coffee',
    dossier: 'Solicitar el dossier completo',
    privacy: 'Privacidad',
    rights: 'LATENTE. Todos los derechos reservados.',
    languageLabel: 'Idioma',
  },

  inquire: {
    metaTitle: 'Consultar — LATENTE',
    metaDescription:
      'Solicite una conversación privada con LATENTE sobre un programa de café de especialidad colombiano a medida para su propiedad.',
    backHome: 'Volver',
    eyebrow: 'Consulta Privada',
    title: 'Solicitar una Conversación Privada',
    intro:
      'Trabajamos con un número reducido de socios a la vez. Cuéntenos un poco sobre su propiedad y nos pondremos en contacto de forma privada.',
    groups: {
      you: 'Sobre usted',
      property: 'Su propiedad',
      conversation: 'La conversación',
    },
    fields: {
      name: 'Nombre',
      company: 'Empresa / Propiedad',
      role: 'Cargo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      country: 'País / Ciudad',
      propertyType: 'Tipo de propiedad',
      propertyTypeDefault: 'Seleccione una opción',
      rooms: 'Número de propiedades o habitaciones',
      interest: 'Área de interés',
      interestDefault: 'Seleccione una opción',
      currentProgram: 'Programa de café actual',
      timeline: 'Plazo',
      timelineDefault: 'Seleccione una opción',
      message: 'Mensaje',
    },
    interestOptions: {
      house: 'Cafés de la Casa',
      bespoke: 'Programa a Medida',
      partnership: 'Asociación Hotelera',
      dossier: 'Solicitar el dossier completo',
    },
    propertyTypes: {
      hotelGroup: 'Grupo hotelero',
      boutique: 'Hotel boutique',
      restaurant: 'Restaurante',
      club: 'Club privado',
      other: 'Otro',
    },
    timelines: {
      exploring: 'Explorando',
      months: 'En 3–6 meses',
      now: 'Listo para empezar',
    },
    consent: {
      before: 'Acepto que LATENTE almacene y utilice estos datos para responder a mi consulta, según se describe en el ',
      privacyLink: 'aviso de privacidad',
      after: '.',
    },
    optionalLabel: 'opcional',
    submit: 'Enviar Consulta',
    sending: 'Enviando…',
    error: 'Algo salió mal. Inténtelo de nuevo o escríbanos directamente.',
    success: {
      title: 'Gracias.',
      body: 'Nos pondremos en contacto de forma privada.',
      back: 'Volver al inicio',
    },
  },

  privacy: {
    metaTitle: 'Privacidad — LATENTE',
    metaDescription: 'Cómo trata LATENTE los datos que comparte al realizar una consulta.',
    eyebrow: 'Aviso de Privacidad',
    title: 'Cómo tratamos sus datos',
    updated: 'Última actualización: {date}',
    notice:
      'Este aviso es una plantilla inicial y debe ser revisado por un asesor legal antes del lanzamiento.',
    sections: [
      {
        title: 'Qué recopilamos',
        body: 'Al enviar una consulta recibimos los datos que usted introduce: nombre, cargo, empresa o propiedad, datos de contacto y el mensaje que escribe. No utilizamos cookies de seguimiento.',
      },
      {
        title: 'Para qué los usamos',
        body: 'Únicamente para responder a su consulta y, si la conversación continúa, para preparar una propuesta. No vendemos ni compartimos sus datos con terceros con fines de marketing.',
      },
      {
        title: 'Dónde se almacenan',
        body: 'Las consultas se entregan en nuestra bandeja privada y se conservan en el servicio de formularios de nuestro proveedor de alojamiento. Las guardamos solo el tiempo necesario para atender su consulta y la relación que pueda derivarse.',
      },
      {
        title: 'Sus derechos',
        body: 'Puede solicitarnos en cualquier momento ver, corregir o eliminar los datos que tenemos sobre usted. Escríbanos a la dirección del pie de página y actuaremos con prontitud.',
      },
    ],
  },
};

export default es;
