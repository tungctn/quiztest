import React, { useEffect } from 'react'
import LoginForm from '../../components/LoginForm'

const index = () => {

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default index
