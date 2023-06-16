import useFetch from '@/api/fetch'
import { useEffect } from 'react'

const Dashboard = () => {
    const fetchUser = useFetch('http://localhost:8000/auth/dummyneedsauth')

    useEffect(() => {
        fetchUser().then(console.log)
    }, [])

    return <>dashboard</>
}

export default Dashboard
