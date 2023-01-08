import LayoutMain from '../../layouts/LayoutMain'
import React from 'react'
import { Table } from 'antd'
import TableRank from '../../components/TableRank'

const index = () => {
    return (
        <div>
            <LayoutMain page='rank'>
                <TableRank />
            </LayoutMain>
        </div>
    )
}

export default index
