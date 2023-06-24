import { AuthenticationContext } from '@/authentication-context'
import { useContext } from 'react'

type FetchOptions = {
    method?: string
    includeToken?: boolean
}

const useFetch = (url: string, options?: FetchOptions) => {
    const { accessToken } = useContext(AuthenticationContext)

    if (!options) {
        options = {}
    }

    const { method = 'GET', includeToken = true } = options
    const headers = new Headers()
    const init: RequestInit = {
        method,
        headers,
        credentials: 'include',
    }

    if (includeToken) {
        headers.set('Authorization', `Bearer ${accessToken}`)
    }

    return (json?: Object) => {
        if (json) {
            headers.set('Content-Type', 'application/json')
            init.body = JSON.stringify(json)
        }

        return fetch(
            `${import.meta.env.VITE_BOOKT_API_ORIGIN}/${url}`,
            init
        ).then((r) => {
            if (!r.ok) {
                throw r
            }

            return r.json()
        })
    }
}

export default useFetch
