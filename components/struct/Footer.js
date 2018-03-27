import React from 'react'
import P from '~/components/base/Paragraph'
import MenuLink from '~/components/MenuLink'

export default class Footer extends React.Component {
  render() {
    return (
      <P>
        <div style={contactTextStyle}>
          <div>Antes de dar o Fora, se quiser tirar dúvidas, dar sugestões ou colaborar, escreva para: info@ofora.org</div>
          <div><MenuLink style={linkStyle} href={{ pathname: '/o-que-e' }}>info@ofora.org</MenuLink></div>
        </div>
      </P>
    )
  }
}

const contactTextStyle = {
  fontSize: 26,
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600
}

const linkStyle = {
  fontSize: 26
}
