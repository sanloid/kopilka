import React from 'react'
import { CellpropType } from '../types/CellType'

export default function Cell(props: CellpropType) {
    return (
        <div className={props.done ? "cellDone" : "cellNotDone"} >
            <div className='cellDate'>
                {props.data.date.toLocaleString(undefined, { minimumIntegerDigits: 2 })}.{(props.data.month + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 })}.{props.data.year}
            </div>
            <div className='cellValue'>
                {props.value}
            </div>
        </div>
    )
}
