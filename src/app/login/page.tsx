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
                    <LoginForm />
                </Box>
            </div>
        </div>
    )
}

export default Login
