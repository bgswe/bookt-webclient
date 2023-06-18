import { NavLink } from 'react-router-dom'

import Box from '@/components/box'
import Button from '@/components/button'
import Header from '@/components/header'

import SingupForm from './SignupForm'

const Signup = () => {
    return (
        <div className="h-screen bg-gray-200 flex flex-col">
            <Header>
                <NavLink to="../login">
                    <Button variant="secondary" size="medium">
                        Login
                    </Button>
                </NavLink>
            </Header>

            <div className="flex-1 flex justify-center items-center">
                <Box className="w-96 shadow">
                    <div className="text-lg text-center text-sky-600 mb-1">
                        Join the family!
                    </div>
                    <div className="text-sm text-gray-400 mb-6 text-center">
                        Provide some basic information to get started
                    </div>
                    <SingupForm />
                </Box>
            </div>
        </div>
    )
}

export default Signup
