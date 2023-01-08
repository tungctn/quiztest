import { Button, Card } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const index = ({ point }) => {

    const router = useRouter()

    useEffect(() => {
        if (point > 15) {
            router.push('/404')
        }
    }, [point])

    // const 

    return (

        <div
            style={{
                width: '90%',
                margin: '100px auto',
                // backgroundColor: 'black',

            }}
        >
            <Card
                style={{
                    backgroundColor: 'black',
                    border: 'none',
                    borderRadius: '10px'
                }}
            >
                <h1 style={{ color: 'white' }}>Your result</h1>
                <div
                    style={{
                        backgroundColor: '#e74c3c',
                        width: '100%',
                        height: '20px',
                        borderRadius: '10px',
                        position: 'relative'
                    }}
                >
                    <div style={{
                        width: `${point / 15 * 100}%`,
                        height: '20px',
                        backgroundColor: '#2ecc71',
                        borderRadius: '10px 0 0 10px',
                    }}>

                    </div>
                </div>
                {/* <div
                    style={{
                        padding: '5px',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        width: '50px',
                        position: 'absolute',
                        bottom: '17px',
                        left: `calc( ${(point * 100 / 15)}%)`
                    }}
                >
                    {(point * 100 / 15).toFixed(1)}%
                </div> */}
                <h1 style={{ color: 'white' }}>Your Score: </h1>
                <h1 style={{ color: 'white' }}>{point}/15</h1>
                <Button
                    style=
                    {{
                        display: 'block',
                        margin: '0 auto',
                        padding: '10px 20px',
                        boxSizing: 'unset',
                        fontSize: '20px',
                    }}
                    type='primary'
                    onClick={() => router.push('/home')}
                >
                    Back
                </Button>
            </Card>

        </div >

    )
}

export default index
