import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_73S5uirj.mjs';

const _page0  = () => import('./chunks/generic_W0F8z7AJ.mjs');
const _page1  = () => import('./chunks/index_RLSbKIAf.mjs');
const _page2  = () => import('./chunks/projects_UKwv2_3Q.mjs');
const _page3  = () => import('./chunks/services_Hy_hJAQH.mjs');
const _page4  = () => import('./chunks/rss_3uOeydZg.mjs');
const _page5  = () => import('./chunks/_slug__XEQynaky.mjs');
const _page6  = () => import('./chunks/_.._cpI_fWU9.mjs');
const _page7  = () => import('./chunks/_.._fBv3jX3R.mjs');
const _page8  = () => import('./chunks/_slug__BaJX0toc.mjs');
const _page9  = () => import('./chunks/_.._Hnlo98yx.mjs');
const _page10  = () => import('./chunks/404_7_MquIly.mjs');
const _page11  = () => import('./chunks/cv_pMWzqpRk.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.0.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects.astro", _page2],["src/pages/services.astro", _page3],["src/pages/rss.xml.js", _page4],["src/pages/store/[slug].astro", _page5],["src/pages/store/[...page].astro", _page6],["src/pages/blog/tag/[tag]/[...page].astro", _page7],["src/pages/blog/[slug].astro", _page8],["src/pages/blog/[...page].astro", _page9],["src/pages/404.astro", _page10],["src/pages/cv.astro", _page11]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
