export const brand = {
  name: "Davion Software",
  lockupWordmark: "Davion",
  lockupCategory: "SOFTWARE",
} as const;

export const home = {
  heroLead: "Software para el trabajo",
  heroTail: "que hoy se hace a mano.",
  oneLiner:
    "Reemplazamos hojas de cálculo, chats dispersos y tareas repetidas por sistemas a medida para pymes en Perú.",
  heroProof:
    "Diagnóstico gratuito de 30 minutos por videollamada: le decimos qué conviene automatizar primero.",
  who: "Estudio de software independiente en Perú.",
  studioBody:
    "Trabajamos con pymes y empresas cuya operación vive en hojas de cálculo, grupos de WhatsApp y tareas que alguien repite cada día. Primero entendemos cómo trabaja su equipo hoy; después construimos, por etapas, el sistema que reemplaza esa parte manual.",
  availability: "Aceptando nuevos proyectos",
  primaryCta: "Agendar diagnóstico gratuito",
  capabilitiesCta: "Ver capacidades",
  whatsappCta: "Escribir por WhatsApp",
  footerStudio: "Estudio de software independiente en Perú.",
} as const;

export const tagline = {
  lines: [
    "Menos hojas de cálculo y chats.",
    "Un sistema de uso diario.",
  ],
} as const;

export const principles = [
  {
    title: "Decisiones por escrito",
    description:
      "Alcance, plazos y costos quedan documentados antes de escribir código.",
  },
  {
    title: "Entregas pequeñas y verificables",
    description:
      "Avances funcionales cada semana, en lugar de promesas a meses vista.",
  },
  {
    title: "Trato directo con quien construye",
    description:
      "Sin capas intermedias: la persona que diseña su sistema responde sus preguntas.",
  },
] as const;

export const processHeading = "Cómo trabajamos";

export const process = [
  {
    title: "Diagnóstico",
    description:
      "Una videollamada de 30 minutos para entender cómo opera su equipo hoy y dónde se pierde el tiempo.",
    receive: "Una recomendación de qué conviene automatizar primero.",
  },
  {
    title: "Propuesta por escrito",
    description:
      "Alcance, plazos y costo quedan documentados antes de escribir una línea de código.",
    receive: "Un documento que puede revisar, ajustar y aprobar.",
  },
  {
    title: "Entregas pequeñas",
    description:
      "Avanzamos por partes que su equipo puede probar cada semana, no con una gran entrega al final.",
    receive: "Avances funcionales que verifica en uso real.",
  },
  {
    title: "Soporte",
    description:
      "Acompañamos la puesta en marcha y ajustamos el sistema con el uso diario.",
    receive: "Contacto directo con quien construyó su sistema.",
  },
] as const;

export const capabilitiesHeading = "Capacidades";

export const capabilities = [
  {
    icon: "product",
    name: "Productos digitales",
    pain: "¿Tiene una idea de producto y no sabe por dónde empezar a construirla?",
    delivery:
      "Una primera versión usable para validar con usuarios reales, sobre una base técnica que aguanta crecer.",
    tools: [] as string[],
  },
  {
    icon: "internal",
    name: "Sistemas internos",
    pain: "¿Su equipo copia los mismos datos en tres lugares?",
    delivery:
      "Un sistema a medida que reemplaza las hojas de cálculo: un solo lugar para registrar, consultar y reportar, con permisos por persona.",
    tools: [] as string[],
  },
  {
    icon: "automation",
    name: "Automatización e IA",
    pain: "¿Alguien de su equipo pasa horas en tareas que se repiten igual cada semana?",
    delivery:
      "Integraciones entre sus herramientas, lectura automática de documentos y flujos que registran, avisan y responden sin trabajo manual.",
    tools: [] as string[],
  },
  {
    icon: "modernization",
    name: "Modernización",
    pain: "¿Su sistema actual es lento, difícil de cambiar o nadie se atreve a tocarlo?",
    delivery:
      "Una revisión del sistema existente y mejoras por etapas en interfaz, rendimiento y mantenimiento, sin detener la operación.",
    tools: [] as string[],
  },
  {
    icon: "messaging",
    name: "Landings y agentes de mensajería",
    pain: "¿Se le escapan consultas de clientes por WhatsApp, Instagram o Facebook?",
    delivery:
      "Una landing clara para su oferta y un agente que responde lo frecuente y deriva a su equipo lo que necesita una persona.",
    tools: [] as string[],
  },
] as const;

export type CapabilityIcon = (typeof capabilities)[number]["icon"];

export const faqHeading = "Preguntas frecuentes";

export const faq = [
  {
    question: "¿Cómo empezamos?",
    answer:
      "Con un diagnóstico gratuito de 30 minutos por videollamada. Cuéntenos qué le quita tiempo a su equipo y cómo opera hoy, y le decimos qué conviene automatizar primero. No pedimos un brief largo para conversar.",
  },
  {
    question: "¿Necesito un equipo técnico o un documento de requisitos?",
    answer:
      "No. Si su negocio depende de hojas de cálculo, chats dispersos o procesos manuales, ese es nuestro punto de partida.",
  },
  {
    question: "¿Qué construyen?",
    answer:
      "Productos digitales, sistemas internos, automatización e IA, modernización de software que ya existe, y landings con agentes de mensajería para WhatsApp, Instagram y Facebook. El alcance de cada proyecto queda por escrito antes de código.",
  },
  {
    question: "¿Cuánto tarda la primera entrega?",
    answer:
      "Trabajamos con entregas pequeñas y verificables. Avances funcionales cada semana, en lugar de promesas a meses vista.",
  },
  {
    question: "¿Cómo se define el precio?",
    answer:
      "Alcance, plazos y costos quedan documentados antes de escribir código. No empezamos a construir sin ese escrito.",
  },
  {
    question: "¿Con quién hablo durante el proyecto?",
    answer:
      "Trato directo con quien construye. Sin capas intermedias: la persona que diseña su sistema responde sus preguntas.",
  },
  {
    question: "¿Y si todavía no sabemos exactamente qué hay que construir?",
    answer:
      "El primer paso es entender la operación. El alcance se escribe después de esa conversación, no antes.",
  },
] as const;

export const coda = {
  headingLead: "Cuéntenos qué le quita tiempo",
  headingTail: "a su equipo.",
  support:
    "Aceptamos nuevos proyectos. El primer paso es un WhatsApp o un correo breve sobre su operación y lo que necesita resolver.",
  riskReversal:
    "No pedimos un contrato para conversar. Alcance, plazos y costos quedan documentados antes de escribir código.",
  action: "Escribir por WhatsApp",
  emailAction: "Escribir un correo",
} as const;

export const links = {
  github: "https://github.com/davion-software",
  whatsapp: `https://wa.me/51996004562?text=${encodeURIComponent(
    "Hola, quiero conversar sobre un proyecto.",
  )}`,
  whatsappDiagnostic: `https://wa.me/51996004562?text=${encodeURIComponent(
    "Hola, quiero agendar el diagnóstico gratuito de 30 minutos por videollamada.",
  )}`,
  calendar: null as string | null,
  email: `mailto:hola@davionsoftware.com?subject=${encodeURIComponent(
    "Conversar sobre un proyecto",
  )}`,
} as const;

export const nav = [
  { href: "#estudio", label: "Estudio" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Empecemos" },
] as const;
