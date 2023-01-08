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
    HomeOutlined
} from "@ant-design/icons";
import { Button, Card, Col, Image, Layout, Menu, Row } from "antd";
import NavBar from '../../components/Navbar'
import LayoutMain from '../../layouts/LayoutMain'

const index = () => {

    const { loadUser, handleLogout } = useContext(AppContext)

    useEffect(() => {
        // console.log(loadUser())
        console.log(localStorage);
    }, [])

    return (
        <div>
            <LayoutMain page="home">
                <Row>
                    <Col
                        span={2}
                    />
                    <Col
                        span={6}
                    >
                        <h1>Mathematics</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <a>
                            <Card
                                title={<Image src='https://e7.pngegg.com/pngimages/444/743/png-clipart-free-math-thumbnail.png' preview={false} />}

                            >
                                <h2>Phep cong co nho</h2>
                            </Card>
                        </a>

                    </Col>
                </Row>
            </LayoutMain>
        </div>


    );
}

export default index
