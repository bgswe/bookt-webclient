import useFetch from '@/api/fetch'
import { AuthenticationContext } from '@/authentication-context'
import Button from '@/components/button'
import Header from '@/components/header'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const { setAccessToken } = useContext(AuthenticationContext)
    const logout = useFetch('auth/logout', {
        method: 'POST',
        includeToken: false,
    })

    return (
        <Header>
            <Button
                onClick={() => {
                    logout().then(() => {
                        setAccessToken(null)
                        navigate('/bookt/login/')
                    })
                }}
            >
                Logout
            </Button>
        </Header>
    )
}

export default Dashboard
