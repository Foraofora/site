
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/acoes/artigo/:id/:slug', (req, res) => {
      return app.render(req, res, '/acoes/article', { id: req.params.id })
    })
    server.get('/acoes/materia/:id/:slug', (req, res) => {
      return app.render(req, res, '/acoes/story', { id: req.params.id })
    })
    server.get('/acoes/fotoevideo/:id/:slug', (req, res) => {
      return app.render(req, res, '/acoes/pictures_and_video', { id: req.params.id })
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
