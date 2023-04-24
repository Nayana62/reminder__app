import Login from '@/Components/Login'
import UserDashboard from '@/Components/UserDashboard'
import { useAuth } from '@/context/AuthContext'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {currentUser} = useAuth()

  return (
    < >
       {!currentUser && <Login/>}
       {currentUser && <UserDashboard/>}
       
    </>
  )
}
