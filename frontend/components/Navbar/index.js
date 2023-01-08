import { DownOutlined } from '@ant-design/icons';
import { Avatar, Col, Dropdown, Image, Menu, Row } from 'antd'
import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const index = () => {
    const { handleLogout } = useContext(AppContext)
    const router = useRouter()
    const userInformations = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a onClick={() => { router.push('/profile') }}>My profile</a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a onClick={handleLogout}>Log out</a>
                    ),
                },
            ]}
        />
    );
    return (
        <div>
            <Row
                style={{ backgroundColor: '#e3f6f5', height: '76px' }}
            >
                <Col span={1}></Col>
                <Col span={3} className='center' style={{ lineHeight: '76px' }}>
                    <Image
                        // src='https://sun-asterisk.vn/wp-content/uploads/2020/10/logo-sun@2x.png'
                        src='https://png.pngtree.com/png-vector/20210507/ourlarge/pngtree-quiz-png-transparent-background-png-image_3257641.jpg'
                        preview={false}
                        width={100}
                        height={40}
                        onClick={() => { router.push('/member') }}
                    />

                </Col>
                <Col span={16}>
                    {/* {currentUser.role === 'admin' &&
                        <a
                            style={{ fontSize: '29px', lineHeight: '76px' }}
                            onClick={() => { router.push('/member/create') }}
                        >
                            Create member
                        </a>
                    } */}

                </Col>
                <Col span={4} >
                    <Dropdown overlay={userInformations} className='pointer' trigger="click">
                        <Row>
                            <Col span={14}></Col>
                            <Col span={6} className='center' style={{ lineHeight: '76px' }}>
                                <Avatar

                                    size={50}
                                // src={}

                                />
                            </Col>
                            <Col span={4} style={{ lineHeight: '76px' }} className='center'>
                                <DownOutlined />
                            </Col>
                        </Row>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    )
}

export default index
