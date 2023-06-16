import { AuthenticationContext } from '@/authentication-context'
import { useContext } from 'react'

type FetchOptions = {
    includeToken?: boolean
    json?: Object
}

const useFetch = (
    url: string,
    method: string = 'GET',
    options?: FetchOptions
) => {
    const { accessToken } = useContext(AuthenticationContext)

    const init: RequestInit = { method, credentials: 'include' }
    if (!options) {
        options = {}
    }

    const { json, includeToken = true } = options

    if (json) {
        init.body = JSON.stringify(options.json)
    }

    if (includeToken) {
        init.headers = new Headers({
            Authorization: `Bearer ${accessToken}`,
        })
    }

    return () =>
        fetch(url, init).then((r) => {
            if (!r.ok) {
                throw r
            }

            return r.json()
        })
}

export default useFetch
