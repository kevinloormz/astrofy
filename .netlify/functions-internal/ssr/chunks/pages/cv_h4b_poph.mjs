/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderSlot, j as renderComponent } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_7vtPEFXH.mjs';

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
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Education</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Title Name", "subtitle": "[start year] to [end year] at [Study Center Name], [City], [Country]" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Title Name", "subtitle": "[start year] to [end year] at [Study Center Name], [City], [Country]" })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Experience</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Job Title at Project or Company Name", "subtitle": "From [Start Date] to [End Date] at [Company], [City], [Country]" }, { "default": ($$result3) => renderTemplate`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Job Title at Project or Company Name", "subtitle": "From [Start Date] to [End Date] at [Company], [City], [Country]" }, { "default": ($$result3) => renderTemplate`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Job Title at Project or Company Name", "subtitle": "From [Start Date] to [End Date] at [Company], [City], [Country]" }, { "default": ($$result3) => renderTemplate`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
` })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Certifications</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-2"> <li> <a href="#" target="_blank"> Certification Name (with link)</a> </li> <li> <a href="#" target="_blank"> Certification Name (with link)</a> </li> </ul> <div class="mb-5"> <div class="text-3xl w-full font-bold">Skills</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> <li>Skill Name</li> </ul> ` })}`;
}, "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/cv.astro", void 0);

const $$file = "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
