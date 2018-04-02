
const express = require('express')
const next = require('next')
const axios = require('axios')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/acoes/artigo/:id', (req, res) => {
      return app.render(req, res, '/acoes/article', { id: req.params.id })
    })

    server.post('/signup/:email', (req, res) => {
      console.log(req.params.email)
      var mailchimpApiUrl = 'https://us12.api.mailchimp.com/3.0'
      var apiKey = '1abb2200ade55136563d9674145b25ee-us12';

      axios({
        method: 'POST',
        url: 'https://us12.api.mailchimp.com/3.0/lists/653ed43bc3/members',
        headers: {Authorization: 'apikey 1abb2200ade55136563d9674145b25ee-us12'},
        data: {
          "email_address": req.params.email,
          "status": "subscribed"
        }
      })
      .then(function (response) {
        res.send('success')
      })
      .catch(function (error) {
        console.log(error);
      });



    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
