import './index.css'

import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import { AuthenticationContext } from '@/authentication-context'
import router from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    const [accessToken, setAccessToken] = useState(null)

    return (
        <QueryClientProvider client={queryClient}>
            <AuthenticationContext.Provider
                value={{ accessToken, setAccessToken }}
            >
                <RouterProvider router={router} />
            </AuthenticationContext.Provider>
        </QueryClientProvider>
    )
}

export default App
