import rss from '@astrojs/rss';
import { S as SITE_TITLE, b as SITE_DESCRIPTION } from './404_7vtPEFXH.mjs';
import { g as getCollection } from './__7fexyjID.mjs';

async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "https://kevinloormz.github.io.git",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}

export { get };
