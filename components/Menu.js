import React from 'react'
import Modal from '~/components/struct/Modal'
import MenuLink from './MenuLink'
import SignupForm from './SignupForm'
import SiteMap from '~/components/SiteMap'

export default class Menu extends React.Component {
  state = {
    showSignup: false,
    showSitemap: false
  }

  render () {
    const {
      props, state, handleMenuMouseEnter, handleMenuMouseLeave, toggleSignup, toggleSitemap
    } = this
    const { showSignup, showSitemap, background } = state
    const { visible, onBgClick } = props
    return (
      <Modal visible={visible} style={{ ...menuModalStyle, backgroundImage: background }} onBgClick={onBgClick}>
        <div style={mainMenuWrapperStyle}>
          <MenuLink href={{ pathname: '/o-que-e' }}>O que é;</MenuLink>{' '}
          <MenuLink href={{ pathname: '/acoes' }}>Ações & imaginações;</MenuLink>
        </div>
        <div style={secondaryMenuWrapperStyle}>
          <MenuLink onClick={toggleSitemap}>Mapa do site;</MenuLink><br />
          <MenuLink onClick={toggleSignup}>Informativo;</MenuLink>
        </div>
        <div style={socialMenuWrapperStyle}>
          <MenuLink href={{ pathname: 'https://www.facebook.com/Fora-330807067434593/' }} >Facebook;</MenuLink>{' '}
          <MenuLink href={{ pathname: 'https://twitter.com/foraofora' }}>Twitter;</MenuLink>{' '}
          <MenuLink href={{ pathname: 'https://www.instagram.com/foraofora/' }} >Instagram;</MenuLink>{' '}
          <MenuLink href={{ pathname: 'https://www.youtube.com/channel/UCWbR2Koag3uPfuaWUktngEg?view_as=subscriber ' }}>YouTube;</MenuLink>
        </div>
        <Modal visible={showSignup} onBgClick={this.toggleSignup}>
          <SignupForm />
        </Modal>
        <Modal visible={showSitemap} onBgClick={this.toggleSitemap}>
          <SiteMap />
        </Modal>
      </Modal>
    )
  }

  toggleSignup = (event) => this.setState({ showSignup: !this.state.showSignup })
  toggleSitemap = (event) => this.setState({ showSitemap: !this.state.showSitemap })
}

const menuModalStyle = {
  background: 'rgba(255,255,255,0.95)',
  color: 'black',
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 40,
  zIndex: 10
}

const mainMenuWrapperStyle = {
  position: 'fixed',
  left: 175,
  top: 21
}

const secondaryMenuWrapperStyle = {
  position: 'fixed',
  right: 20,
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'right'
}

const socialMenuWrapperStyle = {
  position: 'fixed',
  right: 20,
  bottom: 20
}
