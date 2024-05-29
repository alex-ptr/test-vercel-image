import { d as createComponent, r as renderTemplate, f as addAttribute, h as renderHead, i as renderComponent, g as createAstro } from '../astro_lqYiiwMr.mjs';
import { $ as $$Image } from './generic_DM83XBLf.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>Astro</h1> ${renderComponent($$result, "Image", $$Image, { "src": "https://via.placeholder.com/500x500", "width": "500", "height": "500", "alt": "" })} </body></html>`;
}, "/home/alexandre/Tests/test-vercel-image/src/pages/index.astro", void 0);

const $$file = "/home/alexandre/Tests/test-vercel-image/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
