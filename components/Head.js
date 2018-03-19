import React from 'react'
import Head from 'next/head'

export default class CustomHead extends React.Component {
  render() {
    return (
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          body { margin: 0 }
        `}} />
      </Head>
    )
  }
}
