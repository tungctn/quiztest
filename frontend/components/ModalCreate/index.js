import { Col, Form, Input, Modal, Radio, Row, Select } from 'antd'
import Router from 'next/router'
import React, { useEffect } from 'react'
import style from './index.module.scss'

const index = ({ level, open, handleOk, handleCancel, document, setDocument }) => {

    const [form] = Form.useForm()
    // const { Option } = Select

    let levelString
    if (level === 1) {
        levelString = "Beginer"
    } else if (level === 2) {
        levelString = "Proficient"
    } else if (level === 3) {
        levelString = "Low Advanced"
    } else {
        levelString = "Advanced"
    }

    return (
        <div>
            <Modal
                title={levelString}
                width={1000}
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                bodyStyle={{
                    backgroundColor: 'purple',
                    width: '950px',
                    margin: '0 auto',
                    borderRadius: '15px'
                }}
                destroyOnClose={true}

            >
                <Form
                    form={form}
                    preserve={false}
                >
                    <Form.Item
                        rules={[{ required: true, message: 'Please input your answer' }]}
                    >
                        <Input name='question' defaultValue='' id={style.question} placeholder='Enter Question' onChange={(e) => { setDocument({ ...document, question: e.target.value }) }} />
                    </Form.Item>
                    <Row>
                        <Col span={5}>
                            <Form.Item
                                rules={[{ required: true, message: 'Please input your answer' }]}
                            >
                                <Input name='A' defaultValue='' id={style.anwser1} placeholder='Enter Question' onChange={(e) => { setDocument({ ...document, A: e.target.value }) }} />
                            </Form.Item>
                        </Col>
                        <Col span={1} />
                        <Col span={5}>
                            <Form.Item
                                rules={[{ required: true, message: 'Please input your answer' }]}
                            >
                                <Input name='B' defaultValue='' id={style.anwser2} placeholder='Enter Question' onChange={(e) => { setDocument({ ...document, B: e.target.value }) }} />
                            </Form.Item>
                        </Col>
                        <Col span={1} />
                        <Col span={5}>
                            <Form.Item
                                rules={[{ required: true, message: 'Please input your answer' }]}
                            >
                                <Input name='C' defaultValue='' id={style.anwser3} placeholder='Enter Question' onChange={(e) => { setDocument({ ...document, C: e.target.value }) }} />
                            </Form.Item>
                        </Col>
                        <Col span={1} />
                        <Col span={5}>
                            <Form.Item
                                rules={[{ required: true, message: 'Please input your answer' }]}
                            >
                                <Input name='D' defaultValue='' id={style.anwser4} placeholder='Enter Question' onChange={(e) => { setDocument({ ...document, D: e.target.value }) }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Radio.Group
                        name='answer'
                        id={style.select_anwser}
                        defaultValue="A"
                        buttonStyle="solid"
                        style={{ display: 'block' }}
                        onChange={(e) => { setDocument({ ...document, answer: e.target.value }) }}
                    >
                        <Row>
                            <Col span={5} style={{ display: 'flex' }}>
                                <Radio.Button style={{ margin: '0 auto' }} value="A">
                                    A
                                </Radio.Button>
                            </Col>
                            <Col span={1} />
                            <Col span={5} style={{ display: 'flex' }}>
                                <Radio.Button style={{ margin: '0 auto' }} value="B">
                                    B
                                </Radio.Button>
                            </Col>
                            <Col span={1} />
                            <Col span={5} style={{ display: 'flex' }}>
                                <Radio.Button style={{ margin: '0 auto' }} value="C">
                                    C
                                </Radio.Button>
                            </Col>
                            <Col span={1} />
                            <Col span={5} style={{ display: 'flex' }}>
                                <Radio.Button style={{ margin: '0 auto' }} value="D">
                                    D
                                </Radio.Button>
                            </Col>
                            <Col span={1} />
                        </Row>

                    </Radio.Group>
                </Form>
            </Modal>
        </div>
    )
}

export default index
