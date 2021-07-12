/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setrefreshToken] = useState()
    const [experesIn, setExpiresIn ] = useState()

    useEffect(() => {
        axios.post('localhost:3001/login', { 
            code,
        }).then(res => {
            console.log(res.data)
        }).catch((err) => {
            window.location = '/'
        })
    }, [code])
}