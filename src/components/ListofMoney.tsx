import React from 'react'
import { CellsPlan } from '../types/CellType';
import Cell from './Cell'

export default function ListofMoney(props: CellsPlan) {
  let totalSum = 0;
  return (
    <div className='cells'>
      {props.planName}
      <br />
      {[...Array(props.cells.length)].map((_, i) => {
        totalSum += props.cells[i].value
        return (
          <Cell {...props.cells[i]} key={i}/>
        )
      }
      )}
      Итого вы накопите:  {totalSum}
    </div>
  )
}
