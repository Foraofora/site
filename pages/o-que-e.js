import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '~/components/LogoWithMenu'
import ContentWrapper from '~/components/struct/ContentWrapper'
import PageWrapper from '~/components/struct/PageWrapper'
import Title from '~/components/Title'
import Paragraph from '~/components/base/Paragraph'
import Img from '~/components/base/Image'

const P = ({children}) => <Paragraph style={{maxWidth: 710}}>{children}</Paragraph>

export default class Oquee extends React.Component {
  static async getInitialProps ({ req }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const homeDocument = await api.getSingle('home')
    const title = homeDocument.data.title[0].text
    return { title }
  }

  render () {
    return (
      <PageWrapper invert title="O que é" description="O Fora é sobre possibilidades de viver a cidade e acontece por meio de pesquisas sociais, manifestações culturais e ações no espaço público." cover='https://fora.cdn.prismic.io/fora/21c85cdcacb048a984d1150c855296cbda4b1095_fora-dobra-do-corpo-1-.jpg'>
        <div className='cover'>
          <ContentWrapper style={pageStyle}>
            <Title>/O que é</Title>
            <span>O Fora é sobre possibilidades de viver a cidade e acontece por meio de pesquisas sociais, manifestações culturais e ações no espaço público.</span>
          </ContentWrapper>
        </div>
        <div className='content' style={{background: '#dfdfdf'}}>
          <ContentWrapper style={pageStyle}>
            <P><div className='title' id="about">
              /Sobre
            </div></P>
            <div className='heading'>
              <P><span>
                Com o objetivo de levantar histórias, urgências e possíveis futuros das cidades, o Fora articula iniciativas que trazem à tona visões, imaginações e desejos sobre nossos corpos e a vida comum. Como canal de comunicação e ação na rua e na internet, reúne narrativas e práticas que nos provocam a pensar criticamente o contexto urbano, abordando temas de interesse global a partir de perspectivas locais. 
              </span></P>
              <P><span>
                Diante dos esgotamentos atuais, é no Fora que nos encontramos para conhecer e exercer diferentes formas de vida, experimentando maneiras de sentir, pensar, fazer e se relacionar.
              </span></P>
              <P><span>
            </div>
            <div style={{textAlign: 'center', marginTop: 25}}>
              <Img src='/static/oquee.gif' />
            <P><span>
              O Fora comissiona e produz conteúdos inéditos de arte, ensaio e jornalismo para fazer circular expressões culturais que afirmam a diversidade e geram reflexões a respeito do que nos é comum.
            </span></P>
            <P><span>
              O Fora realiza e dissemina pesquisas com base em análise de dados, observações e escutas para investigar dinâmicas, demandas e desafios relacionados ao convívio e às possibilidades de atuação coletiva nas cidades.
            </span></P>
            <P><span>
              O Fora desenvolve encontros, atividades artísticas e educativas, dispositivos e outras intervenções na paisagem urbana para impulsionar experiências de ocupação e democratização do espaço público.
            </span></P>
          </ContentWrapper>
        </div>
        <div className='info' id='info'>
          <ContentWrapper style={{ ...pageStyle, background: '#cfcfcf', position: 'relative'}}>
            <span className='float-title'>/Informações gerais</span>

            <P><div className='title'>/Equipe</div></P>
            <P><div className='grid'>
              <div><b>Germano Dushá</b><br />Escritor, curador e produtor cultural, é co-idealizador e coordenador geral do Fora, responsável pelo conteúdo de produção cultural e pela comunicação institucional.</div>
              <div><b>Fabricia Ramos</b><br />Pesquisadora e advogada, é responsável pelo conteúdo de pesquisa e pela gestão, captação e desenvolvimento institucional do Fora.</div>
              <div><b>Ramon Brandão</b><br />Cientista social, professor e pesquisador na área de ética e filosofia política, é responsável pela fundamentação conceitual do Fora e pelo conteúdo de produção cultural.</div>
              <div><b>Leticia Rheingantz</b><br />Cineasta e produtora, é responsável pela produção audiovisual e pela gestão, captação e desenvolvimento institucional do Fora.</div>
            </div></P>
            <P><div className='grid'>
              <div><b>João Meirelles</b><br />Engenheiro e cientista de dados, é responsável por coordenar a coleta de dados quantitativos e apoiar o conteúdo de pesquisa do Fora.</div>
              <div><b>Manuela Rached</b><br />Jornalista, trabalha com a assessoria no conteúdo de produção cultural e na comunicação institucional.</div>
              <div><b>Fernanda Moraes</b><br />Jornalista livre e graduanda em Gestão de Políticas Públicas, é pesquisadora e assistente geral do Fora.</div>
              <div></div>
            </div></P>
            <P><div className='subtitle'>_Design Gráfico e Programação</div></P>
            <P><div className='grid'>
              <div><b>Frederico Dietzsch</b><br />Designer gráfico, criador da identidade visual e responsável pelos projetos gráficos do Fora.</div>
              <div><b>Raul Luna</b><br />Diretor de arte, é responsável pelo desenho do site e pelos projetos gráficos do Fora.</div>
              <div><b>Diogo Vianna</b><br />Programador, é responsável pelo desenvolvimento do site do Fora.</div>
              <div></div>
            </div></P>

            <P><div className='title'>/Financiamento</div></P>
            <P><div className='grid'>
              <div><b>Autofinanciado.</b></div>
              <div></div>
              <div></div>
              <div></div>
            </div></P>
          </ContentWrapper>

        </div>
        <style jsx>{`
          .cover {
            height: 60vh;
            background: url('/static/oqueebg.jpg');
            background-size: cover;
            background-position: center bottom;
            color: white;
            font-family: 'Source Serif Pro', serif;
            position: relative;
          }
          .cover span {
            position: absolute;
            font-size: 21px;
            bottom: 20px;
            left: 20px;
            right: 60px;
            max-width: 750px;
          }
          .title {
            font-size: 24px;
            margin: 1.5em 0 1em 30px;
            font-family: 'Source Serif Pro', serif;
          }
          .subtitle {
            margin-left: 30px;
            margin-top: 1.5em
          }
          .content {
            font-family: 'Source Serif Pro', serif;
          }
          .content span {
            font-size: 21px;
          }
          .content .heading span {
            font-size: 21px;
            padding-bottom: 0.45em;
            display: block;
            font-weight: 600;
          }
          .info {
            font-family: 'Source Sans Pro', sans-serif;
          }
          .info .float-title {
            font-size: 24px;
            /* max-width: 180px; */
            /* position: absolute; */
            margin-bottom: -10px;
            display: block;
            font-family: IntervalBook, monospace;
            font-size: 16px;
          }
          .info .grid > div {
            margin-bottom: 1em;
          }
          @media only screen and (min-width: 752px) {
            .cover {
              height: 100vh;
            }
            .cover span {
              font-size: 41px;
              bottom: 17%;
            }
            .content span {
              font-size: 24px;
            }
            .content .heading span {
              font-size: 29px;
              font-weight: normal;
            }
            .info .float-title {
              margin-left: 60px;
            }
            .info .grid {
              display: flex;
              justify-content: space-between;
            }
            .info .grid > div {
              width: 22%;
              margin-bottom: 0;
            }
          }
        `}</style>
      </PageWrapper>
    )
  }
}

const pageStyle = {
  paddingBottom: 40
}
