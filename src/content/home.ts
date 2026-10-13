export const brand = {
  name: "Davion Software",
  lockupWordmark: "Davion",
  lockupCategory: "SOFTWARE",
} as const;

export const home = {
  heroLead: "Software para el trabajo",
  heroTail: "que hoy se hace a mano.",
  oneLiner:
    "Diseñamos y construimos productos web, sistemas internos y automatizaciones para empresas en Perú.",
  heroProof:
    "El primer paso es un WhatsApp. Alcance y costo quedan por escrito antes de código.",
  who: "Estudio de software independiente en Perú.",
  audienceLead: "Para startups, pymes y emprendedores locales.",
  audienceDetail:
    "Construimos landings y agentes de ventas en WhatsApp, Instagram y Facebook.",
  audienceBridge:
    "Si su negocio depende de hojas de cálculo, chats dispersos o procesos manuales, ese es nuestro punto de partida.",
  availability: "Aceptando nuevos proyectos",
  primaryCta: "Escribir por WhatsApp",
  secondaryCta: "Escribir un correo",
  footerStudio: "Estudio de software independiente en Perú.",
} as const;

export const tagline = {
  lines: [
    "Menos hojas de cálculo y chats.",
    "Un sistema de uso diario.",
  ],
} as const;

export const benefitsHeading = "Qué cambia en su operación";

export const benefits = [
  {
    title: "Menos trabajo repetido a mano",
    description:
      "Reemplazamos el copiar y pegar entre planillas, chats y herramientas que no se hablan.",
  },
  {
    title: "Ventas que no dependen de una sola persona",
    description:
      "Landings y agentes que atienden en WhatsApp, Instagram y Facebook cuando su equipo no puede.",
  },
  {
    title: "Un sistema que su equipo llega a usar",
    description:
      "Entregas pequeñas y verificables, con trato directo con quien construye.",
  },
] as const;

export const processHeading = "Cómo trabajamos";

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
      "Con un WhatsApp o un correo breve. Cuéntenos qué le quita tiempo a su equipo y cómo opera hoy. No pedimos un brief largo para conversar.",
  },
  {
    question: "¿Necesito un equipo técnico o un documento de requisitos?",
    answer:
      "No. Si su negocio depende de hojas de cálculo, chats dispersos o procesos manuales, ese es nuestro punto de partida.",
  },
  {
    question: "¿Qué construyen?",
    answer:
      "Productos digitales, sistemas internos, automatización e IA, y modernización de software que ya existe. El alcance de cada proyecto queda por escrito antes de código.",
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
