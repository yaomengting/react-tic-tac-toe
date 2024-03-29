import React from 'react'
import Box from './Box'

export default function Board({ board, onClick }){
  return (
    <div className='board'>
      {board.map((value, idx) => {
        return <Box value={value} onClick={() => onClick(idx)} />
      })}
    </div>
  )
}
