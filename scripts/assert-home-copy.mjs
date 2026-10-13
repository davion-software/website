#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = [
  join(root, "dist", "client", "index.html"),
  join(root, "dist", "index.html"),
].find((candidate) => existsSync(candidate));

if (!htmlPath) {
  console.error(
    "Missing dist/client/index.html (Cloudflare adapter) or dist/index.html. Run `npm run build` first.",
  );
  process.exit(1);
}

const html = readFileSync(htmlPath, "utf8");

const required = [
  "Software para el trabajo",
  "que hoy se hace a mano.",
  "Aceptando nuevos proyectos",
  "Agendar diagnóstico gratuito",
  "Ver capacidades",
  "Diagnóstico gratuito de 30 minutos por videollamada: le decimos qué conviene automatizar primero.",
  "Hola%2C%20quiero%20agendar%20el%20diagn%C3%B3stico%20gratuito%20de%2030%20minutos%20por%20videollamada.",
  "Diagnóstico gratuito de 30 minutos",
  "Por videollamada. Cuéntenos qué le quita tiempo a su equipo y le decimos qué conviene automatizar primero. Sin contrato para conversar.",
  "Copiar correo",
  'aria-live="polite"',
  "Reemplazamos hojas de cálculo, chats dispersos y tareas repetidas por sistemas a medida para pymes en Perú.",
  "Estudio de software independiente en Perú.",
  "Trabajamos con pymes y empresas cuya operación vive en hojas de cálculo, grupos de WhatsApp y tareas que alguien repite cada día.",
  "Primero entendemos cómo trabaja su equipo hoy; después construimos, por etapas, el sistema que reemplaza esa parte manual.",
  "Decisiones por escrito",
  "Entregas pequeñas y verificables",
  "Trato directo con quien construye",
  "Con un diagnóstico gratuito de 30 minutos por videollamada.",
  "landings con agentes de mensajería",
  "Productos digitales",
  "¿Tiene una idea de producto y no sabe por dónde empezar a construirla?",
  "Una primera versión usable para validar con usuarios reales, sobre una base técnica que aguanta crecer.",
  "Sistemas internos",
  "¿Su equipo copia los mismos datos en tres lugares?",
  "Un sistema a medida que reemplaza las hojas de cálculo: un solo lugar para registrar, consultar y reportar, con permisos por persona.",
  "Automatización e IA",
  "¿Alguien de su equipo pasa horas en tareas que se repiten igual cada semana?",
  "Integraciones entre sus herramientas, lectura automática de documentos y flujos que registran, avisan y responden sin trabajo manual.",
  "Modernización",
  "¿Su sistema actual es lento, difícil de cambiar o nadie se atreve a tocarlo?",
  "Una revisión del sistema existente y mejoras por etapas en interfaz, rendimiento y mantenimiento, sin detener la operación.",
  "Landings y agentes de mensajería",
  "¿Se le escapan consultas de clientes por WhatsApp, Instagram o Facebook?",
  "Una landing clara para su oferta y un agente que responde lo frecuente y deriva a su equipo lo que necesita una persona.",
  "Cómo trabajamos",
  "Diagnóstico",
  "Una videollamada de 30 minutos para entender cómo opera su equipo hoy y dónde se pierde el tiempo.",
  "Una recomendación de qué conviene automatizar primero.",
  "Propuesta por escrito",
  "Alcance, plazos y costo quedan documentados antes de escribir una línea de código.",
  "Un documento que puede revisar, ajustar y aprobar.",
  "Entregas pequeñas",
  "Avanzamos por partes que su equipo puede probar cada semana, no con una gran entrega al final.",
  "Avances funcionales que verifica en uso real.",
  "Soporte",
  "Acompañamos la puesta en marcha y ajustamos el sistema con el uso diario.",
  "Contacto directo con quien construyó su sistema.",
  "Usted recibe:",
  "Escribir por WhatsApp",
  "hola@davionsoftware.com",
  "Davion",
  "SOFTWARE",
];

const forbiddenCopy = [
  "innovación",
  "innovacion",
  "disrupción",
  "disrupcion",
  "disruption",
  "innovation",
];

const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const allowedEmails = ["hola@davionsoftware.com"];

const forbiddenColors = [
  "#EAB33E",
  "#eab33e",
  "#121921",
  "#2D363F",
  "#2d363f",
  "#6E7881",
  "#6e7881",
];

const missing = required.filter((snippet) => !html.includes(snippet));
const leakedCopy = forbiddenCopy.filter((snippet) =>
  html.toLowerCase().includes(snippet.toLowerCase()),
);
const leakedColors = forbiddenColors.filter((snippet) => html.includes(snippet));
const usedWhite = /#fff(?:fff)?\b/i.test(html);
const usedGeist = /geist/i.test(html);

if (missing.length > 0) {
  console.error("Missing required copy:\n- " + missing.join("\n- "));
}

if (leakedCopy.length > 0) {
  console.error("Forbidden copy present:\n- " + leakedCopy.join("\n- "));
}

const foundEmails = html.match(emailPattern) ?? [];
const inventedEmails = [
  ...new Set(foundEmails.map((email) => email.toLowerCase())),
].filter((email) => !allowedEmails.includes(email));

if (inventedEmails.length > 0) {
  console.error(
    "Invented contact email is not allowed:\n- " + inventedEmails.join("\n- "),
  );
}

if (leakedColors.length > 0) {
  console.error("Forbidden colors present:\n- " + leakedColors.join("\n- "));
}

if (usedWhite) {
  console.error("Davion White / #FFFFFF is not in Brand Foundations.");
}

if (usedGeist) {
  console.error("Geist appeared without a technical UI snippet.");
}

if (
  missing.length > 0 ||
  leakedCopy.length > 0 ||
  leakedColors.length > 0 ||
  usedWhite ||
  usedGeist ||
  inventedEmails.length > 0
) {
  process.exit(1);
}

console.log("Home copy and Brand Foundations checks passed.");
