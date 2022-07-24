import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='NavBar'>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О приложении</Link>
            <Link to='/calendar'>Календарь</Link>
            <Link to='/plansnew'>Создать план</Link>
        </div>
    )
}
