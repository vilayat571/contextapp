import { createContext } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const user = { id: 1, name: 'Vilayat', surname: "Safarov" }
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
};
export default UserContext;