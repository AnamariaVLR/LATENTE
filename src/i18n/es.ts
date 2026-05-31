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
    tagline: 'Café colombiano curado, diseñado como identidad.',
    inquire: 'Consultar',
    scroll: 'Descender',
  },

  opening: {
    body: 'Seleccionamos, desarrollamos y ubicamos Café de Especialidad Colombiano, entendido como cultura, identidad y ritual.',
  },

  essence: {
    eyebrow: 'Esencia',
    body: 'Cultivado con cuidado y tostado con precisión, el café LATENTE revela una energía contenida y una profundidad en capas — concebido tanto para el ritual sereno como para el disfrute refinado.',
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
        image: '/images/coffee-01-high-bloom.jpg',
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
    body: 'Concebido para habitar espacios refinados. Cada edición se adapta a la atmósfera y la identidad de su entorno.',
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
    fields: {
      name: 'Nombre',
      company: 'Empresa / Propiedad',
      role: 'Cargo',
      email: 'Correo electrónico',
      country: 'País',
      interest: 'Área de interés',
      interestDefault: 'Seleccione una opción',
      message: 'Mensaje',
    },
    interestOptions: {
      house: 'Cafés de la Casa',
      bespoke: 'Programa a Medida',
      partnership: 'Asociación Hotelera',
    },
    optionalLabel: 'opcional',
    submit: 'Enviar Consulta',
    success: {
      title: 'Gracias.',
      body: 'Nos pondremos en contacto de forma privada.',
      back: 'Volver al inicio',
    },
  },
};

export default es;
