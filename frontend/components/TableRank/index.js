import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { dataRank } from '../../api/result';

const index = () => {

    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         money: '￥300,000.00',
    //         address: 'New York No. 1 Lake Park',
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         money: '￥1,256,000.00',
    //         address: 'London No. 1 Lake Park',
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         money: '￥120,000.00',
    //         address: 'Sidney No. 1 Lake Park',
    //     },
    // ];
    const columns = [
        {
            title: '###',
            dataIndex: 'number',
            key: 'number'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Point',
            dataIndex: 'point',
            key: 'point',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            // render: text => { return text.toISOString().split('T')[0] }  
        },
    ];

    const [data, setData] = useState([])
    const [pagination, setPagination] = useState({
        position: ['bottomCenter'],
        pageSize: 5,
        showSizeChanger: false,

    })
    const getDataRank = async () => {
        const response = await dataRank()
        setData(response.data)

    }

    useEffect(() => {
        getDataRank()

    }, [])

    const dataSource = data?.sort((data1, data2) => { return Number(data2.point) - Number(data1.point) }).map((item, index) => {
        return {
            number: index + 1,
            email: item.email,
            key: item.id,
            point: item.point,
            time: item.created_at
        }


    })

    return (
        <div
            style={{ margin: '100px 0 0 45px', width: '90%' }}
        // onClick={() => { console.log(data?.sort((data1, data2) => { return Number(data2.point) - Number(data1.point) })) }}
        >
            <Table
                style={{ margin: '0 auto' }}
                columns={columns}
                dataSource={dataSource}
                pagination={false}

            />
        </div>
    )
}

export default index
