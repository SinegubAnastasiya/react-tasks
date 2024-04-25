import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Task36() {
    const [res, setRes] = useState([])

    const getUniversity = async () => {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus')

        setRes(response.data)
    }

    useEffect(() => {
        getUniversity()

    }, [])

    return <div>
        <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
http://universities.hipolabs.com/search?country=Belarus. API возвращает
университеты страны переданной в качестве одного из доментов url. Ваша задача
отображать все университеты в тег параграф.</p>

        {res.map(el => <p>{el.name}</p>)}
        
    </div>
}

export default Task36