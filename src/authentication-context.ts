import { createContext } from 'react'

export const AuthenticationContext = createContext({
    accessToken: null,
    setAccessToken: (accessToken: string | null) => {
        throw Error('method to set token not implemented')
    },
})
