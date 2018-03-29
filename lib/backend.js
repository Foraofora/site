import Prismic from 'prismic-javascript';

let api = false;

export async function getAcoes() {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2');
  const docQuery = await api.query(Prismic.Predicates.any('document.type', ['article', 'story', 'pictures_and_video']), { fetchLinks: ['author.name', 'category.name'] });
  const catQuery = await api.query(Prismic.Predicates.any('document.type', ['category']));
  return { documents: docQuery.results, categories: catQuery.results };
}

export async function getTags() {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2');
  return { tags: api.tags };
}

export async function getByTag(tag) {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2');
  const docQuery = await api.query([
    Prismic.Predicates.any('document.type', ['article', 'story', 'pictures_and_video']),
    Prismic.Predicates.at('document.tags', [tag]),
  ], { fetchLinks: ['author.name', 'category.name'] });
  return { documents: docQuery.results };
}
