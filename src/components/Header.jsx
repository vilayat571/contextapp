import React, { useContext } from 'react'
import Theme from '../context/Theme'
import '../Main.css'
function Header() {
    const context = useContext(Theme);
    const { theme } = context;
    return (
        <div>
            <h1 style={{ color: theme === 'light' ? 'black' : 'red' }}>
                {theme}
            </h1>
        </div>
    )
}

export default Header
