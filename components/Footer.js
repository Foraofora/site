import React from 'react'
import P from './Paragraph'

export default class Footer extends React.Component {
  render() {
    return (
      <P>
        <div style={contactTextStyle}>
          <div>Tem dúvida, sugestão ou quer colaborar de alguma forma?! Escreve pra gente!</div>
          <div>info@ofora.org</div>
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
