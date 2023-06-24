import { createBrowserRouter } from 'react-router-dom'

import Dashboard from '@/pages/dashboard'
import Login from '@/pages/login'
import Signup from '@/pages/signup'

import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
    {
        path: '/bookt',
        children: [
            {
                path: '',
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '',
                        element: <Dashboard />,
                    },
                ],
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <Signup />,
            },
        ],
    },
])

export default router
