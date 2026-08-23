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
  who: "Estudio de software independiente en Perú.",
  audienceLead: "Para startups, pymes y emprendedores locales.",
  audienceDetail:
    "Construimos landings y agentes de ventas en WhatsApp, Instagram y Facebook.",
  audienceBridge:
    "Si su negocio depende de hojas de cálculo, chats dispersos o procesos manuales, ese es nuestro punto de partida.",
  availability: "Aceptando nuevos proyectos",
  primaryCta: "Empezar un proyecto",
  secondaryCta: "Ver capacidades",
  footerStudio: "Estudio de software independiente en Perú.",
} as const;

export const principles = [
  {
    title: "Trato directo con quien construye",
    description:
      "Sin capas intermedias: la persona que diseña su sistema responde sus preguntas.",
  },
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
] as const;

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

export const coda = {
  headingLead: "Cuéntenos qué le quita tiempo",
  headingTail: "a su equipo.",
  support:
    "Aceptamos nuevos proyectos. El primer paso es un WhatsApp o un correo breve sobre su operación y lo que necesita resolver.",
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
  { href: "#contacto", label: "Empecemos" },
] as const;
