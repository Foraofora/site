import React from 'react'
import MenuLink from '~/components/MenuLink'

const rootStyle = {
  display: 'flex',
  position: 'absolute',
  left: 108,
  top: 160,
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 41,
  fontWeight: 600,
  width: '60%',
  justifyContent: 'space-evenly'
}

const SiteMap = ({style}) => (
  <div style={{...rootStyle, ...style}}>
    <div>
      <div>
        <MenuLink href={{ pathname: '/o-que-e' }} >O que é</MenuLink>
      </div><br />
      <div><MenuLink href={{ pathname: '/acoes/tags' }}>Sobre;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/tags' }}>Equipe;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/tags' }}>Parceiros;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/tags' }}>Escutando a Cidade;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/tags' }}>Formularios;</MenuLink></div>
    </div>
    <div>
      <div>
        <MenuLink href={{ pathname: '/acoes' }} >Ações & imaginações</MenuLink>
      </div><br />
      <div><MenuLink href={{ pathname: '/acoes/tags' }}>Arte;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/tags' }}>Ensaios;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/tags' }}>Jornalismo;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/tags' }} >Palavras-Chave;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/athors' }} >Participantes;</MenuLink></div>
    </div>
  </div>
)

export default SiteMap
