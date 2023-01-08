import LayoutMain from '../../layouts/LayoutMain'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import style from './index.module.scss'
import ModalCreate from '../../components/ModalCreate'
import { AppContext } from '../../context/AppContext'
import { createDocument } from '../../api/document'

const index = (props) => {

    const [visible, setVisible] = useState(false)
    const [level, setLevel] = useState(1)
    const [document, setDocument] = useState({
        question: '',
        A: '',
        B: '',
        C: '',
        D: '',
        answer: 'A',
        level: level,
        courseId: 1
    })
    const { openNotification } = useContext(AppContext)
    // const i = 0 
    // const setReloadPage = () => {
    //     props.reloadPage()
    //     setVisible(false)
    // }

    useEffect(() => {
        // setReloadPage()
        // setVisible()
        setDocument({
            question: '',
            A: '',
            B: '',
            C: '',
            D: '',
            answer: 'A',
            level: level,
            courseId: 1
        })
    }, [visible])



    const handleClick = (level) => {
        setLevel(level)
        setVisible(true)
    }



    const handleOk = async () => {
        const response = await createDocument(document)
        if (response.success === 'true') {
            openNotification('success', 'Create successful')
            setVisible(false)
        } else {
            openNotification('error', 'Create failed')
        }


        console.log(document)
        console.log(level)
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div>
            <LayoutMain page="create">
                <Row type='flex' justify='center' align='middle' style={{ minHeight: '500px' }}>
                    <Col span={6}>
                        <Button
                            className={[style.level1, style.boxlevel]}
                            type='primary'
                            onClick={() => handleClick(1)}
                        >
                            <h1>Beginner <PlusCircleOutlined /></h1>
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button
                            className={[style.level2, style.boxlevel]}
                            type='primary'
                            onClick={() => handleClick(2)}
                        >
                            <h1>Proficient <PlusCircleOutlined /></h1>
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button
                            className={[style.level3, style.boxlevel]}
                            type='primary'
                            onClick={() => handleClick(3)}
                        >
                            <h1>Low Advanced <PlusCircleOutlined /></h1>
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button
                            className={[style.level4, style.boxlevel]}
                            type='primary'
                            onClick={() => handleClick(4)}
                        >
                            <h1>Advanced <PlusCircleOutlined /></h1>
                        </Button>
                    </Col>
                </Row>

            </LayoutMain>
            <ModalCreate
                open={visible}
                level={level}
                handleOk={handleOk}
                handleCancel={handleCancel}
                document={document}
                setDocument={setDocument}
            />
        </div>
    )
}

export default index
