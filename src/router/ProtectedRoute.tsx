import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { AuthenticationContext } from '@/authentication-context'

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const { accessToken, setAccessToken } = useContext(AuthenticationContext)

    useEffect(() => {
        if (!accessToken) {
            fetch('http://localhost:8000/command/refresh', {
                credentials: 'include',
            })
                .then((r) => {
                    if (!r.ok) {
                        throw r
                    }

                    return r.json()
                })
                .then(({ access_token }: { access_token: string }) => {
                    setAccessToken(access_token)
                })
                .catch(() => {
                    navigate('/bookt/login')
                })
        }
    }, [accessToken])

    return accessToken ? <Outlet /> : null
}

export default ProtectedRoute
