import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    HomeOutlined,
    PartitionOutlined,
    CrownFilled,
    InsuranceFilled
} from "@ant-design/icons";
import { Button, Col, Menu, Row } from "antd";
import NavBar from '../../components/Navbar'
import style from './index.module.css'
import { useRouter } from 'next/router';

const index = ({ children, page }) => {

    const { loadUser, handleLogout } = useContext(AppContext)
    // const [page, setPage] = useState('home')
    const router = useRouter()

    useEffect(() => {
        console.log(localStorage);
    }, [])

    const items = [
        {
            label: "Home",
            key: "home",
            icon: <HomeOutlined />
        },
        {
            label: "Create",
            key: "create",
            icon: <CrownFilled />
        },
        {
            label: "Ranking",
            key: "rank",
            icon: <InsuranceFilled />
        },
        {
            label: "Test",
            key: "test",
            icon: <PartitionOutlined />
        }

    ];

    const handleCLick = (info) => {
        router.push(`/${info.key}`)
    }

    return (
        <div>
            <NavBar />
            <Row>
                <Col span={4}>
                    <div
                        style={{
                            // width: 256
                        }}
                    >
                        <Menu
                            defaultSelectedKeys={[page]}
                            // defaultOpenKeys={["sub1"]}
                            mode="inline"
                            theme="light"
                            // inlineCollapsed={collapsed}
                            items={items}
                            onClick={handleCLick}
                        />
                    </div>
                </Col>
                <Col
                    span={20}
                    style={{
                        backgroundColor: 'Gainsboro',
                        minHeight: '642px'
                    }}
                >
                    {children}
                </Col>
            </Row>
        </div>
    );
}

export default index
