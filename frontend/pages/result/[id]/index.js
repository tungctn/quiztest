import React from 'react'
import LayoutMain from '../../../layouts/LayoutMain'
import FormResult from '../../../components/FormResult'
import { useRouter } from 'next/router'

const index = () => {

    const router = useRouter()
    const point = router.query.id

    return (
        <LayoutMain>
            <FormResult point={point} />
        </LayoutMain>
    )
}

export default index
