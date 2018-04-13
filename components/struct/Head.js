import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class CustomHead extends React.Component {
  render () {
    return (
      <Head>
        <title>Fora - {this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='stylesheet' type='text/css' href='/static/main.css' />
        <link rel='stylesheet' media='screen' href='https://fontlibrary.org/face/interval' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Source+Serif+Pro' rel='stylesheet' />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:image" content={this.props.cover} />
        <style jsx global>{
          `html {
            min-height: 100%;
            width: 100%;
          }
          body {
            margin: 0;
            overflow-x: hidden;
            width: 100%;
          }`
        }</style>
      </Head>
    )
  }
}
