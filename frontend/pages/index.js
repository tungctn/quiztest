import { Spin } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      if (localStorage['token']) {
        router.push('/home')
      } else {
        router.push('/login')
      }
    }, 2000)
  })

  return (
    <div
      style={{
        height: '600px',
        textAlign: 'center',
        lineHeight: '600px'
      }}
    >
      <Spin
        size='large'
      >
      </Spin>
    </div>
  )
}
