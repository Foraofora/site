import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class CustomHead extends React.Component {
  render() {
    return (
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/main.css" />
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/interval" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro" rel="stylesheet" />
      </Head>
    );
  }
}
