import Prismic from 'prismic-javascript'

const api = await Prismic.api("https://fora.prismic.io/api/v2")

export async function getAcoes() {
  const docQuery = await api.query(
    Prismic.Predicates.any("document.type", ["article", "pictures_and_video"]),
    {'fetchLinks': ['author.name', 'category.name']}
  )
  const catQuery = await api.query(
    Prismic.Predicates.any("document.type", ["category"])
  )
  return { documents: docQuery.results, categories: catQuery.results }
}
