/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderSlot, j as renderComponent } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404__uPU-Yc-.mjs';

const $$Astro$1 = createAstro("https://kevinloormz.github.io.git");
const $$TimeLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "C:/Users/kevin/Documents/GitHub/portfolio/src/components/cv/TimeLine.astro", void 0);

const $$Astro = createAstro("https://kevinloormz.github.io.git");
const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold">Profile</div> </div> <div class="mb-10 text-justify">
Soy un analista e ingeniero de datos altamente motivado y con experiencia en la creación de reportes de alto impacto y en la optimización de flujos de trabajo para mejorar la eficiencia y la calidad de los datos. Tengo habilidades avanzadas en el manejo de bases de datos SQL y en la creación de dashboards personalizados para distintas áreas de la compañía. Además, tengo habilidades para trabajar con distintos stakeholders y traducir datos en conocimientos para presentar hallazgos..
</div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Education</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Ingeniero en Sistemas Computacionales", "subtitle": "2013 to 2020 at Universidad de Guayaquil, Guayaquil, Ecuador" })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Experience</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Oficial Analista de Datos", "subtitle": "From Mayo 2022 to Actualidad at Banco Guayaquil, Guayaquil, Ecuador" }, { "default": ($$result3) => renderTemplate`
* Generar reportes de alto impacto y escalables para dar visibilidad en la toma de decisiones de las distintas áreas de la compañía (Comercial, Marketing, Digital, etc).
    * Responsable de mejorar y llevar los flujos de trabajo y optimización de la información (data) para el diseño y creación de los Dashboards. 
    * Trabajar con distintos Stakeholders para definir el alcance de las iniciativas de análisis, traducir datos en conocimientos y presentar hallazgos.
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Ingeniero de Datos", "subtitle": "From Abril 2019 to Mayo 2022  at Global Hitss, Guayaquil, Ecuador" }, { "default": ($$result3) => renderTemplate`
* Diseñar y construir Pipeline de datos a partir de una variedad de fuentes de datos 
    * Monitoreos de estabilidad y ejecutar controles de calidad de Pipeline de datos 
    * Gestionar flujos de datos existentes y realizar optimizaciones 
    * Experiencia avanzada trabajando con motores de bases de datos Sql
` })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Certifications</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-2"> <li> <a href="https://platzi.com/p/kevinloorm/course/2681-datacademy/diploma/detalle/" target="_blank"> Reto Datacademy Platzi ➟</a> </li> <li> <a href="https://drive.google.com/file/d/10_jDpAGrHhy9KSbgV_I8dfj-CVlxlvzA/view?usp=sharing" target="_blank"> Conviértete en data analyst ➟</a> </li> <li> <a href="https://drive.google.com/file/d/1P_ssl9Qlhk_w5A4ALi4H3jub66ezDcPO/view?usp=sharing" target="_blank"> Power BI esencial  ➟</a> </li> <li> <a href="https://courses.cognitiveclass.ai/certificates/42cdbd5d9da04aa582d5fc78961b6a8f" target="_blank"> Big Data ➟</a> </li> <li> <a href="http://ude.my/UC-M0PD70FZ" target="_blank"> Python para Machine Learning y Ciencia de Datos ➟</a> </li> </ul> <div class="mb-5"> <div class="text-3xl w-full font-bold">Skills</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> <li>Sql Avanzado</li> <li>Python</li> <li>ETL</li> <li>Tableau</li> <li>Power BI</li> <li>Matplotlib</li> <li>Modelado de datos</li> <li>Estadísticas</li> <li>Análisis predictivo</li> <li>Limpieza de datos</li> </ul> ` })}`;
}, "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/cv.astro", void 0);

const $$file = "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
