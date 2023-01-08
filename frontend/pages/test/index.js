import { Col, Image, Row, Card } from 'antd'
import React from 'react'
import LayoutMain from '../../layouts/LayoutMain'

const index = () => {
    return (
        <div>
            <LayoutMain page="test">
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
                        <a href='/test/math'>
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
    )
}

export default index
