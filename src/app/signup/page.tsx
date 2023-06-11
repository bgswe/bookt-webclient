import Box from '@/components/box'
import Button from '@/components/button'
import Header from '@/components/header'
import Link from 'next/link'

import SignupForm from './SignupForm'

const Login = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header>
                <Link href="/login">
                    <Button variant="secondary" size="small">
                        Login
                    </Button>
                </Link>
            </Header>

            <div className="flex-1 flex justify-center items-center">
                <Box className="w-96">
                    <div className="text-lg text-center text-sky-600 mb-1">
                        Join the family!
                    </div>
                    <div className="text-sm text-gray-400 mb-6 text-center">
                        Register your organization here to get started
                    </div>
                    <SignupForm />
                </Box>
            </div>
        </div>
    )
}

export default Login
