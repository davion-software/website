#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
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
  "Software construido alrededor de problemas reales de negocio.",
  "Davion Software diseña y construye productos web, sistemas internos y automatizaciones para empresas que necesitan modernizar la forma en que operan.",
  "Estudio de software independiente en Perú. Técnico, moderno, preciso, fiable, pragmático.",
  "startups, pymes / SMEs y emprendedores locales",
  "WhatsApp, Instagram y Facebook",
  "Digital products",
  "MVPs, SaaS platforms, portals, dashboards and custom web applications.",
  "Internal systems",
  "Operational tools that replace spreadsheets, manual workflows and disconnected software.",
  "Automation &amp; AI",
  "Integrations, AI agents, document processing and repetitive-task automation.",
  "Software modernization",
  "Interface, performance, architecture and maintainability improvements for existing systems.",
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

const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;

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

if (emailPattern.test(html)) {
  console.error("Invented contact email is not allowed.");
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
  emailPattern.test(html)
) {
  process.exit(1);
}

console.log("Home copy and Brand Foundations checks passed.");
