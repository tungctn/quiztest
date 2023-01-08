import React, { useContext, useEffect, useState } from 'react'
// import 'antd/dist/antd.css'
import { Row, Image, Button, Form, Col, Input, Checkbox, notification, Spin } from "antd"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { AppContext } from '../../context/AppContext'
import style from './index.module.css'

// import './style.css'


const index = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const { handleLogin } = useContext(AppContext)

    useEffect(() => {
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [isLoading])

    const onFinish = async (loginFormData) => {
        setIsLoading(true)
        await handleLogin(loginFormData)
    };

    const onFinishFailed = (errorInfo) => {
        setIsLoading(true)
        setIsLogin(false)
        openNotification('error', 'Login failed')
    };
    return (
        <div
            style={{
                backgroundImage: `url("https://anhdephd.vn/wp-content/uploads/2022/03/hinh-nen-may-tinh-dep-4k-800x450.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div>
                <Row type='flex' justify='center' align='middle' style={{ minHeight: '100vh' }}>
                    <Col
                        className={[style.bg, style.padding]}
                    >
                        <Image
                            preview={false}
                            width={400}
                            src="https://previews.123rf.com/images/infadel/infadel1707/infadel170700179/82175731-quiz-logo-with-exam-test.jpg"
                        />
                        <Spin
                            size="large"
                            spinning={isLoading}
                        >
                            <Form
                                name='authForm'
                                className='form'
                                layout='vertical'
                                labelCol={{
                                    span: 24,
                                }}
                                wrapperCol={{
                                    span: 24,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    label='Email'
                                    name='email'
                                    rules={[
                                        { required: true, type: 'email', message: 'Please input your email' }
                                    ]}
                                >
                                    <Input prefix={<UserOutlined />} placeholder='Email' />
                                </Form.Item>

                                <Form.Item
                                    label='Password'
                                    name='password'
                                    rules={[{ required: true, message: 'Please input your password' }]}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder='Password' />
                                </Form.Item>

                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a style={{ float: 'right' }} href="">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" style={{ width: '100%' }} className='btn' type='primary'>
                                        Login
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Spin>

                    </Col>
                </Row>
            </div>


        </div>
    )
}

export default index
