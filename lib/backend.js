import Prismic from 'prismic-javascript'

export async function getAcoes() {
  const api = await Prismic.api('https://fora.prismic.io/api/v2')
  const docQuery = await api.query(
    Prismic.Predicates.any('document.type', ['article', 'story', 'pictures_and_video']),
    {'fetchLinks': ['author.name', 'category.name']}
  )
  const catQuery = await api.query(
    Prismic.Predicates.any('document.type', ['category'])
  )
  return { documents: docQuery.results, categories: catQuery.results }
}
