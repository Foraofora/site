import React from 'react'
import Head from '~/components/struct/Head'
import LogoWithMenu from '../LogoWithMenu'
import Footer from './Footer'
import ContentWrapper from './ContentWrapper'

export default class PageWrapper extends React.Component {
  render () {
    return (
      <div style={{ ...wrapperStyle, ...this.props.style }}>
        <Head title={this.props.title}/>
        <LogoWithMenu invert={this.props.invert} />
        {this.props.children}
        <ContentWrapper>
          <Footer />
        </ContentWrapper>
      </div>
    )
  }
}

const wrapperStyle = {}
