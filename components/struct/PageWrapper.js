import React from 'react'
import Head from '~/components/struct/Head'
import LogoWithMenu from '../LogoWithMenu'
import Footer from './footer/Footer'
import ContentWrapper from './ContentWrapper'

export default class PageWrapper extends React.Component {
  render () {
    return (
      <div style={{ ...wrapperStyle, ...this.props.style }}>
        <Head {...this.props} />
        <LogoWithMenu invert={this.props.invert} />
        {this.props.children}
        <ContentWrapper style={{background: 'white'}}>
          <Footer />
        </ContentWrapper>
      </div>
    )
  }
}

const wrapperStyle = {
}
