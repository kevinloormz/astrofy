/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404__uPU-Yc-.mjs';
import { g as getCollection, $ as $$HorizontalCard } from './__OLa069jr.mjs';

const $$Astro = createAstro("https://kevinloormz.github.io.git");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="text-xl py-1">Hola 👋</div> <div class="text-5xl font-bold">Soy Kevin</div> <div class="text-3xl py-3 font-bold">Ingeniero de datos y Analista BI</div> <div class="py-2"> <text class="text-lg">
Tengo más de 5 años de experiencia en áreas relacionadas con Tecnología de la 
        Información (TI), Business Intelligence (BI) y Ciencia de Datos. Me apasiona trabajar 
        para empresas que tengan una cultura basada en el análisis de datos. Considero que 
        soy una persona responsable, comprometida y que cumple con las tareas asignadas 
        en los plazos establecidos. Además, poseo habilidades para adaptarme a los cambios 
        y aprender de manera rápida.
</text> </div> <div class="mt-8"> <a class="btn" href="https://www.linkedin.com/in/kevinloor/" target="_blank"> Linkedin ➟</a> <a href="mailto:kevinloormz@gmail.com" target="_blank" class="btn btn-outline ml-5">
Correo
</a> </div> </div> <div> <div class="text-3xl w-full font-bold mb-2">My last projects ${"</>"}</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Spark Fundamentals", "img": "/ApacheSpark.webp", "desc": "En mi proyecto de exploraci\xF3n de datos en Deepnote, utilic\xE9 Apache Spark para procesar grandes vol\xFAmenes de datos de una competencia de los Juegos Ol\xEDmpicos. Mi objetivo era obtener informaci\xF3n sobre los resultados de los juegos, los atletas y los pa\xEDses participantes. Utilizando Spark, pude procesar los datos de manera eficiente y obtener informaci\xF3n valiosa en poco tiempo. Este proyecto me permiti\xF3 mejorar mis habilidades en el procesamiento de grandes vol\xFAmenes de datos y en la exploraci\xF3n de datos.", "url": "https://deepnote.com/@kevin-loor/Spark-NUcx6iefRL6IFYeuX15Qgg", "badge": "NEW" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 2", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 3", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#", "badge": "FOSS" })} ` })}`;
}, "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
