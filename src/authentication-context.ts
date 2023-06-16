import { createContext } from 'react'

export const AuthenticationContext = createContext({
    accessToken: null,
    setAccessToken: () => {
        throw Error('method to set token not implemented')
    },
})
