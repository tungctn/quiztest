import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { setAuthHeader } from '../../../api/auth'
import FormQuestion from '../../../components/FormQuestion'
import { AppContext } from '../../../context/AppContext'
import LayoutMain from '../../../layouts/LayoutMain'
import ListQuestion from '../../../components/ListQuestion'


const index = () => {

    const { listDocument } = useContext(AppContext)
    const [listData, setListData] = useState([])
    const getListData = async () => {
        setAuthHeader(localStorage['token'])
        const response = await listDocument()
        setListData(response)
    }

    useEffect(() => {
        getListData()
    }, [])

    return (
        <div>
            <LayoutMain page="test">
                {/* <FormQuestion listDocument={listData} /> */}
                <ListQuestion
                    listDocument={listData}
                    setListDocument={setListData}
                />
            </LayoutMain>

        </div>
    )
}

export default index
