import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, Result } from 'antd'
import 'antd/dist/antd.css'
import { AppContext } from '../context/AppContext'

const error = () => {

    const router = useRouter()
    const [getCurrentUser] = useContext(AppContext)

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])


    return (
        <div>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary" onClick={() => { router.push('/') }}>Back Home</Button>}
            />
        </div>
    )
}

export default error
