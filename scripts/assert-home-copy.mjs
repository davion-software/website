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
  "Cuéntenos qué le quita tiempo",
  "a su equipo.",
  "Diseñamos y construimos productos web, sistemas internos y automatizaciones para empresas en Perú.",
  "Estudio de software independiente en Perú.",
  "startups, pymes y emprendedores locales",
  "WhatsApp, Instagram y Facebook",
  "Productos digitales",
  "MVPs, plataformas SaaS, portales, tableros y aplicaciones web a medida.",
  "Sistemas internos",
  "Herramientas operativas que reemplazan hojas de cálculo, flujos manuales y software desconectado.",
  "Automatización e IA",
  "Integraciones, agentes, procesamiento de documentos y automatización de tareas repetitivas.",
  "Modernización de software",
  "Mejoras de interfaz, rendimiento, arquitectura y mantenimiento en sistemas que ya existen.",
  "Escribir por WhatsApp",
  "Escribir un correo",
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
