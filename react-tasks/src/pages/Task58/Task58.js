import { useState, useEffect } from 'react';
import axios from 'axios';

function Task50() {
    let [res, setRes] = useState('')

    const getData = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json')
        setRes(response.data.ip)
    }

    useEffect(() => {
        getData()
    }, [])
   

    return <div>
        <p>3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
данные в заголовок.</p>

    <h1>{res}</h1>
         
    </div>
}

export default Task50