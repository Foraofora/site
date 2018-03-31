import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import P from '~/components/base/Paragraph'
import MenuLink from '~/components/MenuLink'
import CC from '~/components/CC'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <ContentWrapper>
          <P>
            <div style={contactTextStyle}>
              <div>Antes de dar o Fora, se quiser tirar dúvidas, dar sugestões ou colaborar, escreva para:</div>
              <div><MenuLink style={linkStyle} href={{ pathname: '/o-que-e' }}>info@ofora.org</MenuLink></div>
            </div>
          </P>
        </ContentWrapper>
        <CC style={ccText} /><span style={ccText}>Fora utiliza a licença creative commons bla bla blabla bla bla 2018 direitos reservados</span>
      </div>
    )
  }
}
const ccText = {
  fontSize: 10,
  fontFamily: 'IntervalBook, monospace',
  maxWidth: 200,
  display: 'inline-block',
  verticalAlign: 'middle',
  marginRight: 10
}

const contactTextStyle = {
  fontSize: 26,
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  margin: '80px 0 50px 0'
}

const linkStyle = {
  fontSize: 26
}
