import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { ListOfMoneypropType } from '../types/ListofMoneyType'
import InputForm from './InputForm'
import ListofMoney from './ListofMoney'
import NavBar from './NavBar'

export default function CreatePlan() {
    const [listProp, setListProp] = useState<ListOfMoneypropType>({ days: 0, start: 0, increment: 0, interval: 0 });
    const select = useAppSelector(state => state.CellsState.plans);
    const [selectedPlan, setSelectedPlan] = useState(0);
    return (
        <>
            <NavBar />
            <div>
                Создать план накопления
                <br />
                {select.map((pl, i) => {
                    return (
                        <button onClick={() => setSelectedPlan(i)} key={i}>
                            {pl.planName}
                        </button>
                    )
                })}
                <br />
                <InputForm />
                <ListofMoney {...select[selectedPlan]} />
            </div>
        </>
    )
}
