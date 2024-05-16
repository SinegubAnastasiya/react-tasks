import { useState, useMemo } from 'react';
import axios from 'axios';

function Task50() {
    const [data, setData] = useState('')

    async function getIp() {
        const response = await axios.get('https://api.ipify.org/?format=json')
        setData(response.data.ip)
    }

    useMemo( () => {
        getIp()
    }, [])

    return <div>
        <p>5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
должен быть получен с использованием useMemo при монтировании
компонента и кэширован для избегания повторных запросов к API при
обновлении других частей компонента. https://api.ipify.org/?format=json</p>

        <h1>{data}</h1>

    </div>
}

export default Task50