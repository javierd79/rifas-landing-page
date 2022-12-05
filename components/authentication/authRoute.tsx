/* eslint-disable react/display-name */
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { findUser } from '../../helpers/api-service'

const authRoute = (Component: any) => {
  return (props: any) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)
    useEffect(() => {
      const checkToken = async () => {
        const token = localStorage.getItem('token')

        if (!token) {
          router.replace('/')
        } else {
          const response: any = await findUser(JSON.parse(token))
          if (!response.ok) {
            localStorage.removeItem('token')
            router.replace('/')
          } else {
            const userData = await response.json()
            if (!userData.currentUser) {
              router.replace('/')
              localStorage.removeItem('token')
            } else {
              setUser(userData.currentUser)
              setAuthenticated(true)
            }
          }
        }
      }
      checkToken()
    }, [router])

    if (authenticated) {
      return <Component {...props} user={user} />
    } else {
      return null
    }
  }
}
export default authRoute
