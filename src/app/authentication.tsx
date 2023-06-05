'use client'

import { createContext, useState, PropsWithChildren } from 'react'

export const AuthenticationContext = createContext<any>(null)

const AuthenticationProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState(null)

    return (
        <AuthenticationContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider
