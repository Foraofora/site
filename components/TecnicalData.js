import React from 'react'
import P from '~/components/base/Paragraph'

const TecnicalData = ({ tecnicalData }) => {
  return (
    <div className='root' >
      { tecnicalData.length ? <p className='title'>Ficha técnica</p> : null }
      { tecnicalData.length ? <P style={{padding: 0, margin: 0, fontSize: 13}}>{tecnicalData}</P> : null }
      <style jsx>{`
        .root {
          text-align: right;
          font-family: IntervalBook, monospace;
          font-size: 13px;
          line-height: 1.25em;
        }
      `}</style>
    </div>
  )
}

export default TecnicalData
