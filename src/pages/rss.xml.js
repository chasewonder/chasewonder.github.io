import rss from '@astrojs/rss';
import { getPublishedPosts } from '../utils/posts';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: "Chase's blog",
    description: 'Notes on learning, life, and everything in between.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}`,
      categories: post.data.tags,
    })),
  });
}
