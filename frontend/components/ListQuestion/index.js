import { ExclamationCircleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Form, Input, Row, Col, Radio, Button, Modal, Spin } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import style from './index.module.scss'

const index = ({ listDocument }) => {

    const [form] = Form.useForm()
    const [document, setDocument] = useState([])
    const { pointTest } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false)
    const [answer, setAnswer] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        if (listDocument && listDocument.length !== 0) {
            setDocument(listDocument)
            console.log(listDocument[page])
            console.log(page)
        }
    }, [listDocument, page])

    const handleOk = () => {
        pointTest(document)
        setIsLoading(true)
    }

    const confirm = () => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Do you want to submit',
            okText: 'OK',
            cancelText: 'Cancel',
            onOk: handleOk
        });
    };

    const handleNext = () => {
        if (page >= 0 && page < 14) {
            setPage(page + 1)
        }

    }
    const handlePrev = () => {
        if (page >= 1 && page <= 14) {
            setPage(page - 1)
        }
    }

    const handleChange = () => {
        
    }

    return (
        <div
            style={{ width: '90%', margin: '100px auto 0px' }}
        >
            <Form
                form={form}
                preserve={false}
            >
                {/* {
                    document.map((item, index) => {
                        return ( */}
                <Spin
                    size='large'
                    spinning={isLoading}
                >
                    <div key={page}>
                        <h1>Question {page + 1}: </h1>
                        <Form.Item
                            rules={[{ required: true, message: 'Please input your answer' }]}
                        >
                            <Input name='question' value={listDocument[page]?.question} id={style.question} placeholder='Enter Question' />
                        </Form.Item>
                        <Row>
                            <div className={style.col5}>
                                <Form.Item
                                    rules={[{ required: true, message: 'Please input your answer' }]}
                                >
                                    <Input name='A' value={listDocument[page]?.A} id={style.anwser1} placeholder='Enter Question' />
                                </Form.Item>
                            </div>
                            <div className={style.col1} />
                            <div className={style.col5}>


                                <Form.Item
                                    rules={[{ required: true, message: 'Please input your answer' }]}
                                >
                                    <Input name='B' value={listDocument[page]?.B} id={style.anwser2} placeholder='Enter Question' />
                                </Form.Item>
                            </div>
                            <div className={style.col1} />
                            <div className={style.col5}>
                                <Form.Item
                                    rules={[{ required: true, message: 'Please input your answer' }]}
                                >
                                    <Input name='C' value={listDocument[page]?.C} id={style.anwser3} placeholder='Enter Question' />
                                </Form.Item>
                            </div>
                            <div className={style.col1} />
                            <div className={style.col5}>
                                <Form.Item
                                    rules={[{ required: true, message: 'Please input your answer' }]}
                                >
                                    <Input name='D' value={listDocument[page]?.D} id={style.anwser4} placeholder='Enter Question' />
                                </Form.Item>
                            </div>
                        </Row>
                        <Radio.Group
                            name='answer'
                            id={style.select_anwser}
                            // defaultValue={listDocument[page]?.anwser}
                            buttonStyle="solid"
                            style={{ display: 'block' }}
                            onChange={(e) => {
                                document?.map((item, index) => {
                                    if (index === page) {
                                        item.answer = e.target.value
                                        setDocument([...document])
                                    }
                                })
                            }}
                        >
                            <Row>
                                <div className={style.col5} style={{ display: 'flex' }}>
                                    <Radio.Button style={{ margin: '0 auto' }} value="A">
                                        A
                                    </Radio.Button>
                                </div>
                                <div className={style.col1} />
                                <div className={style.col5} style={{ display: 'flex' }}>
                                    <Radio.Button style={{ margin: '0 auto' }} value="B">
                                        B
                                    </Radio.Button>
                                </div>
                                <div className={style.col1} />
                                <div className={style.col5} style={{ display: 'flex' }}>
                                    <Radio.Button style={{ margin: '0 auto' }} value="C">
                                        C
                                    </Radio.Button>
                                </div>
                                <div className={style.col1} />
                                <div className={style.col5} style={{ display: 'flex' }}>
                                    <Radio.Button style={{ margin: '0 auto' }} value="D">
                                        D
                                    </Radio.Button>
                                </div>
                            </Row>

                        </Radio.Group>
                    </div>
                </Spin>

                {/* )
                    })
                } */}



                <div style={{
                    marginTop: '50px',
                    float: 'right'
                }}>
                    <Button disabled={page === 0 ? true : false} type='primary' onClick={handlePrev}><LeftOutlined /></Button>
                    <Button disabled={page === 14 ? true : false} type='primary' onClick={handleNext}><RightOutlined /></Button>
                </div>
                {page === 14 && (
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Button htmlType='submit' onClick={confirm} type='primary' >Submit</Button>
                    </div>
                )
                }
            </Form>

        </div>
    )
}

export default index
