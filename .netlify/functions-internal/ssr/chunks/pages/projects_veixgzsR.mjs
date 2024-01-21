/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404__uPU-Yc-.mjs';
import { $ as $$HorizontalCard } from './__OLa069jr.mjs';

const $$Astro = createAstro("https://kevinloormz.github.io.git");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "sideBarActiveItemID": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="text-3xl w-full font-bold mb-5">Projects by Kevin Loor</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Spark Fundamentals", "img": "/ApacheSpark.webp", "desc": "En mi proyecto de exploraci\xF3n de datos en Deepnote, utilic\xE9 Apache Spark para procesar grandes vol\xFAmenes de datos de una competencia de los Juegos Ol\xEDmpicos. Mi objetivo era obtener informaci\xF3n sobre los resultados de los juegos, los atletas y los pa\xEDses participantes. Utilizando Spark, pude procesar los datos de manera eficiente y obtener informaci\xF3n valiosa en poco tiempo. Este proyecto me permiti\xF3 mejorar mis habilidades en el procesamiento de grandes vol\xFAmenes de datos y en la exploraci\xF3n de datos.", "url": "https://deepnote.com/@kevin-loor/Spark-NUcx6iefRL6IFYeuX15Qgg" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 2", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#" })} ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 3", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#", "badge": "FOSS" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 4", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 5", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#" })} ` })}`;
}, "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
