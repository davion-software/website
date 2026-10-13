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
  support:
    "La información que hoy vive repartida en archivos, grupos y la memoria de su equipo pasa a un solo lugar que todos usan cada día.",
  before: {
    label: "Hoy",
    items: [
      { icon: "sheet", text: "pedidos_final_v3 (copia).xlsx" },
      { icon: "chat", text: "Grupo de WhatsApp «Pedidos», 214 sin leer" },
      { icon: "copy", text: "Los mismos datos copiados en tres lugares" },
      { icon: "clock", text: "El reporte del lunes, armado a mano" },
    ],
  },
  after: {
    label: "Con su sistema",
    items: [
      "Un solo registro, siempre actualizado",
      "Avisos automáticos a la persona correcta",
      "Cada dato se ingresa una sola vez",
      "Reportes listos cuando los necesita",
    ],
  },
} as const;

export type TaglineIcon = (typeof tagline.before.items)[number]["icon"];

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

export const founder = {
  enabled: true,
  heading: "Quién construye",
  name: "David Vargas Domínguez",
  role: "Ingeniero de software",
  statement:
    "Diseño y construyo cada sistema de Davion, y respondo directamente sus preguntas durante el proyecto.",
  photoAlt: "Retrato de David Vargas Domínguez",
  links: [
    { label: "GitHub", href: "https://github.com/thedavos" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thedavos/" },
    { label: "davosdo.dev", href: "https://davosdo.dev" },
  ],
} as const;

export const capabilitiesHeading = "Capacidades";

export const capabilities = [
  {
    icon: "product",
    name: "Productos digitales",
    pain: "¿Tiene una idea de producto y no sabe por dónde empezar a construirla?",
    delivery:
      "Una primera versión usable para validar con usuarios reales, sobre una base técnica que aguanta crecer.",
    tools: ["TypeScript", "Astro", "Flutter", "Supabase", "Cloudflare"] as string[],
  },
  {
    icon: "internal",
    name: "Sistemas internos",
    pain: "¿Su equipo copia los mismos datos en tres lugares?",
    delivery:
      "Un sistema a medida que reemplaza las hojas de cálculo: un solo lugar para registrar, consultar y reportar, con permisos por persona.",
    tools: ["TypeScript", "Supabase", "PostgreSQL", "Metabase", "Google Sheets"] as string[],
  },
  {
    icon: "automation",
    name: "Automatización e IA",
    pain: "¿Alguien de su equipo pasa horas en tareas que se repiten igual cada semana?",
    delivery:
      "Integraciones entre sus herramientas, lectura automática de documentos y flujos que registran, avisan y responden sin trabajo manual.",
    tools: ["n8n", "AWS Bedrock", "Cloudflare Workers", "Telegram", "Google Sheets"] as string[],
  },
  {
    icon: "modernization",
    name: "Modernización",
    pain: "¿Su sistema actual es lento, difícil de cambiar o nadie se atreve a tocarlo?",
    delivery:
      "Una revisión del sistema existente y mejoras por etapas en interfaz, rendimiento y mantenimiento, sin detener la operación.",
    tools: ["TypeScript", "Astro", "Tailwind CSS", "Cloudflare"] as string[],
  },
  {
    icon: "messaging",
    name: "Landings y agentes de mensajería",
    pain: "¿Se le escapan consultas de clientes por WhatsApp, Instagram o Facebook?",
    delivery:
      "Una landing clara para su oferta y un agente que responde lo frecuente y deriva a su equipo lo que necesita una persona.",
    tools: ["Astro", "Tailwind CSS", "n8n", "WhatsApp Business API"] as string[],
  },
] as const;

export type CapabilityIcon = (typeof capabilities)[number]["icon"];

export const projectsHeading = "Proyectos";

export const testimonialsHeading = "Testimonios";

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
  heading: "Diagnóstico gratuito de 30 minutos",
  support:
    "Por videollamada. Cuéntenos qué le quita tiempo a su equipo y le decimos qué conviene automatizar primero. Sin contrato para conversar.",
  calendarAction: "Agendar en el calendario",
  emailLabel: "O escríbanos a",
  copyAction: "Copiar correo",
  copied: "Correo copiado",
  copyFailed: "No se pudo copiar el correo",
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
  emailAddress: "hola@davionsoftware.com",
  email: `mailto:hola@davionsoftware.com?subject=${encodeURIComponent(
    "Conversar sobre un proyecto",
  )}`,
} as const;

export interface Project {
  name: string;
  summary: string;
  href: string | null;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export const projects: Project[] = [];

export const testimonials: Testimonial[] = [];

export const company = {
  country: "Perú",
  linkedin: null as string | null,
  ruc: null as string | null,
} as const;

export const nav: NavItem[] = [
  { href: "#capacidades", label: "Capacidades" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  ...(projects.length > 0 ? [{ href: "#proyectos", label: "Proyectos" }] : []),
  { href: "#estudio", label: "Estudio" },
  { href: "#contacto", label: "Contacto" },
];
