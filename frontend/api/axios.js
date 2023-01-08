
import axios from 'axios'
import React from 'react'

const config = {
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}


export default axios.create(config)
