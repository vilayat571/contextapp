import React, { useContext } from 'react';
import Theme from '../context/Theme';

function Button() {
    const data = useContext(Theme);
    const { theme, setTheme } = data;
    return (
        <div>
            Active theme : {theme}
        </div>
    )
}

export default Button;
