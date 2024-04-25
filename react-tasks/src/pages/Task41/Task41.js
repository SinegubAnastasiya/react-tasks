import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Task36() {
    const [res, setRes] = useState({})

    const getIP = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json')

        setRes(response.data)
    }

    useEffect(() => {
        getIP()

    }, [])

    return <div>
        <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
https://api.ipify.org/?format=json. API возвращает ваш ip-адрес. Ваша задача
отображать ip-адрес в тег h1.</p>

        <h1>{res.ip}</h1>
        
    </div>
}

export default Task36