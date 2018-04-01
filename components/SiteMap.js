import React from 'react'
import MenuLink from '~/components/MenuLink'

const rootStyle = {
  display: 'flex',
  position: 'absolute',
  fontFamily: 'IntervalBook, monospace',
  fontSize: 14,
  left: 178,
  top: 170
}

const SiteMap = ({style}) => (
  <div style={{...rootStyle, ...style}}>
    <div>
      <div>
        <MenuLink href={{ pathname: '/o-que-e' }} >O que é</MenuLink>
      </div><br /><br />
      <div><MenuLink>Sobre;</MenuLink></div>
      <div><MenuLink>Equipe;</MenuLink></div>
      <div><MenuLink>Parceiros;</MenuLink></div>
      <div><MenuLink>Escutando a Cidade;</MenuLink></div>
      <div><MenuLink>Formularios;</MenuLink></div>
    </div>
    <div>
      <div>
        <MenuLink href={{ pathname: '/acoes' }} >Ações & imaginações</MenuLink>
      </div><br /><br />
      <div><MenuLink>Arte;</MenuLink></div>
      <div><MenuLink>Ensaios;</MenuLink></div>
      <div><MenuLink>Jornalismo;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/tags' }} >Palavras-Chave;</MenuLink></div>
      <div><MenuLink href={{ pathname: '/acoes/athors' }} >Participantes;</MenuLink></div>
    </div>
  </div>
)

export default SiteMap
