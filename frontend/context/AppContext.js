import { createContext, useEffect } from "react";
import { getCurrentUser, loginAPI, logoutAPI, setAuthHeader } from "../api/auth";
import { notification } from 'antd'
import { useRouter } from "next/router";
import { point, test } from "../api/test";
import { result } from "../api/result";

export const AppContext = createContext(null)

const AppContextProvider = ({ children }) => {

    const router = useRouter()

    useEffect(() => {
        if (localStorage['token']) {
            setAuthHeader(localStorage['token'])
            console.log(localStorage['token'])
        }
    }, [])

    const openNotification = (type, message, description) => {
        notification[type]({
            message,
            description,
            duration: 3,
        })
    }

    const handleLogin = async (loginForm) => {
        const response = await loginAPI(loginForm)
        if (response.success === 'true') {
            localStorage.setItem('token', response.token)
            setAuthHeader(localStorage['token'])
            openNotification('success', 'Login successful')
            setTimeout(() => {
                router.push('/home')
            }, 2000)
        } else {
            openNotification('error', 'Login fail')
        }
    }

    const handleLogout = async () => {
        const response = await logoutAPI()
        localStorage.removeItem('token')
        openNotification('success', response.msg)
        router.push('/login')
    }

    const loadUser = async () => {
        const response = await getCurrentUser()
        return response.user
    }

    const listDocument = async () => {
        const response = await test()
        return response.test
    }

    const pointTest = async (data) => {
        const response = await point(data)
        if (response && response.data) {
            openNotification('success', 'Complete the test', `Point: ${response.point}`)
            setTimeout(() => {
                router.push(`/result/${response.point}`)
            }, 2000)

        } else {
            openNotification('failed', 'Failed the test')
        }
    }

    // const getRank = async (id) => {
    //     const response = await result(id)
    //     return 
    // }

    const data = {
        openNotification,
        loadUser,
        handleLogin,
        handleLogout,
        listDocument,
        pointTest
    }

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider