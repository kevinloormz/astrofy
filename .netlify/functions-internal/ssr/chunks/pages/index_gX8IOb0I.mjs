/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, F as Fragment } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_7vtPEFXH.mjs';
import { g as getCollection, $ as $$HorizontalCard, c as createSlug } from './__7fexyjID.mjs';

const $$Astro = createAstro("https://kevinloormz.github.io.git");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const last_posts = posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="text-xl py-1">Hey there 👋</div> <div class="text-5xl font-bold">Soy Kevin</div> <div class="text-3xl py-3 font-bold">Software Engineer and Entrepreneur</div> <div class="py-2"> <text class="text-lg">
This is <b>Astrofy</b> a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS.
        Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed. I hope you find
        it useful!
</text> </div> <div class="mt-8"> <a class="btn" href="https://twitter.com/manuelernestog" target="_blank"> Let's connect!</a> <a href="https://github.com/manuelernestog/astrofy" target="_blank" class="btn btn-outline ml-5">
Get This template
</a> </div> </div> <div> <div class="text-3xl w-full font-bold mb-2">My last projects ${"</>"}</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 1", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#", "badge": "NEW" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 2", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demo Project 3", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#", "badge": "FOSS" })} <div> <div class="text-3xl w-full font-bold mb-5 mt-10">Latest from blog</div> </div> ${last_posts.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalCard", $$HorizontalCard, { "title": post.data.title, "img": post.data.heroImage, "desc": post.data.description, "url": "/blog/" + createSlug(post.data.title, post.slug), "target": "_self", "badge": post.data.badge })} <div class="divider my-0"></div> ` })}`)}` })}`;
}, "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/kevin/Documents/GitHub/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
