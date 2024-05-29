import { useState, useEffect } from 'react';
import axios from 'axios';

function Task1() {
    let [res, setRes] = useState('')

    const getData = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json')
        setRes(response.data.ip)
    }

    useEffect(() => {
        getData()
    }, [])
   
    return <div>

        <p>{res}</p>
         
    </div>
}

export default Task1