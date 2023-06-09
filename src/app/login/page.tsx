import Box from '@/components/box'
import Button from '@/components/button'
import Header from '@/components/header'

import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header>
                <Button variant="secondary" size="small">
                    Sign Up
                </Button>
            </Header>

            <div className="flex-1 flex justify-center items-center">
                <Box className="w-80">
                    <div className="text-lg text-center text-gray-600 mb-1">
                        Welcome!
                    </div>
                    <div className="text-sm text-gray-400 mb-6 text-center">
                        Please sign in with your email
                    </div>
                    <LoginForm />
                </Box>
            </div>
        </div>
    )
}

export default Login
