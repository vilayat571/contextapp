import { createContext, useEffect, useState } from "react";

const Theme = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const states = {
        theme,
        setTheme
    };
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <Theme.Provider value={states}>
            {children}
        </Theme.Provider>
    )
}
export default Theme;