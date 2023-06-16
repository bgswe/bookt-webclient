import { NavLink } from 'react-router-dom'

import Box from '@/components/box'
import Button from '@/components/button'
import Header from '@/components/header'

import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className="h-screen bg-gray-200 flex flex-col">
            <Header>
                <NavLink to="../signup">
                    <Button variant="secondary" size="medium">
                        Sign Up
                    </Button>
                </NavLink>
            </Header>

            <div className="flex-1 flex justify-center items-center">
                <Box className="w-96 shadow">
                    <div className="text-lg text-center text-sky-600 mb-1">Welcome!</div>
                    <div className="text-sm text-gray-400 mb-6 text-center">Please sign in with your email</div>
                    <LoginForm />
                </Box>
            </div>
        </div>
    )
}

export default Login
