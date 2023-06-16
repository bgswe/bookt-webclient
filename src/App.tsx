import './index.css'

import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import { AuthenticationContext } from '@/authentication-context'
import router from '@/router'

function App() {
    const [accessToken, setAccessToken] = useState(null)

    return (
        <AuthenticationContext.Provider value={{ accessToken, setAccessToken }}>
            <RouterProvider router={router} />
        </AuthenticationContext.Provider>
    )
}

export default App
