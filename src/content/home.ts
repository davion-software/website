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

export const capabilitiesHeading = "Capacidades";

export const capabilities = [
  {
    name: "Productos digitales",
    description:
      "MVPs, plataformas SaaS, portales, tableros y aplicaciones web a medida.",
  },
  {
    name: "Sistemas internos",
    description:
      "Herramientas operativas que reemplazan hojas de cálculo, flujos manuales y software desconectado.",
  },
  {
    name: "Automatización e IA",
    description:
      "Integraciones, agentes, procesamiento de documentos y automatización de tareas repetitivas.",
  },
  {
    name: "Modernización de software",
    description:
      "Mejoras de interfaz, rendimiento, arquitectura y mantenimiento en sistemas que ya existen.",
  },
] as const;

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
