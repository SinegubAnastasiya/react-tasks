import { useState } from 'react';
import { useEffect } from 'react';

function Task36() {
    const [obj, setObj] = useState({})

    const getIP = async () => {
        const response = await fetch('https://api.ipify.org/?format=json', {method: 'GET'})

        const parsedData = await response.json()
        setObj(parsedData)
    }

    useEffect(() => {
        getIP()

        document.querySelector('h1').style = 'color: green'
    }, [])

    return <div>
        <h1>{obj.ip}</h1>
    </div>
}

export default Task36