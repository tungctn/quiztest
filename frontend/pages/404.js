import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, Result } from 'antd'
import 'antd/dist/antd.css'

const error = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist. Go back home in 3s"
                extra={<Button type="primary" onClick={() => { router.push('/') }}>Back Home</Button>}
            />

        </div>
    )
}

export default error
