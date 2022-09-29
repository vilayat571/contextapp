import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const data = useContext(UserContext);
    const { id, name, surname } = data
    return (
        <div>
            {name} - {surname}
        </div>
    )
}

export default Profile
