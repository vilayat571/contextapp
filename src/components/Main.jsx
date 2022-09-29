import React, { useContext } from 'react'
import Theme from '../context/Theme'
import Button from './Button'
import Header from './Header'
import Profile from './Profile';

function Main() {
    const context = useContext(Theme);
    const { theme } = context;
    return (
        <div className={theme === 'dark' ? "dark" : "light"} >
            <Button />
            <Header />
            <br />
            <hr />
            <Profile />
        </div>
    )
}

export default Main
