import React, { useState } from 'react'

export default function TstSheet() {
    const [radioValue, setRadioValue] = useState(1);

    function radioString(){
        switch(radioValue){
            case 1: return "вы выбрали 1" ;
            case 2: return "а теперь 2" ;
            case 3: return "ну вы выбрали 3" ;
        }
    }

    return (
        <div>
            <div className='radios'>
                Выбор рас
                <input type="radio" name='radio' value={1} checked={radioValue === 1 ? true : false} onChange={e => setRadioValue(parseInt(e.target.value))} />
            </div>
            <div className='radios'>
                Выбор двас
                <input type="radio" name='radio' value={2} checked={radioValue === 2 ? true : false} onChange={e => setRadioValue(parseInt(e.target.value))} />
            </div>
            <div className='radios'>
                Выбор трис епту
                <input type="radio" name='radio' value={3} checked={radioValue === 3 ? true : false} onChange={e => setRadioValue(parseInt(e.target.value))} />
            </div>
            {radioString()}
        </div>
    )
}
