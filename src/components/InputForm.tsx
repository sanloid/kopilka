import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { addState } from '../slices/ListOfMoneyPropsSlice';
import { CellpropType } from '../types/CellType';
import { InputFormPropType } from '../types/InputFormType'
import { ListOfMoneypropType } from '../types/ListofMoneyType';

interface inpType {
    days: number | any,
    start: number | any,
    interval: number | any,
    increment: number | any,
    planname: string,
}

export default function InputForm() {

    const [inp, setInp] = useState<inpType>({ days: 10, start: 100, increment: 100, interval: 7, planname: "Plan name" });
    const [planeIsCreated, setPlan] = useState(false);
    const dispatch = useAppDispatch();

    function createCellArray(props: ListOfMoneypropType) {
        let arr = new Array<CellpropType>(props.days);
        let cd = new Date().getTime();
        for (let i = 0; i < arr.length; i++) {
            let tCellDate = new Date(cd);
            cd += props.interval * 24 * 60 * 60 * 1000;
            arr[i] = { done: false, value: props.start + i * props.increment, data: { date: tCellDate.getDate(), month: tCellDate.getMonth(), year: tCellDate.getFullYear() }, fullTime: cd }
        }
        dispatch(addState({ planName: inp.planname, cells: arr }));
    }

    return (
        <div className='InputForm'>
            Название плана
            <input type="text" className='formInput' value={inp.planname} onChange={e => setInp({ ...inp, planname: e.target.value })} />
            Через сколько дней откладываем?
            <input type='number' className='formInput' value={inp.interval} onChange={e => setInp({ ...inp, interval: e.target.value })}></input>
            Количество итераций?
            <input type="number" className='formInput' value={inp.days} onChange={e => setInp({ ...inp, days: e.target.value })} />
            С какой суммы начинаем?
            <input type="number" className='formInput' value={inp.start} onChange={e => setInp({ ...inp, start: e.target.value })} />
            Сколько прибавляем каждый раз?
            <input type="number" className='formInput' placeholder='increment...' value={inp.increment} onChange={e => setInp({ ...inp, increment: e.target.value })} />
            <button style={{ marginBottom: 20 }} onClick={() => createCellArray(inp)}>Построить план накопления</button>
            {/* {planeIsCreated ? <button>Сохранить текущий план накоплений</button> : <></>} */}
        </div>
    )
}
