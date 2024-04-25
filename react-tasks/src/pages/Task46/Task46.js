import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Task36() {
    const [res, setRes] = useState([])
    const [text, setText] = useState('')
    let [flag, setFlag] = useState(true)

    const getUniversity = async () => {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus')

        setRes(response.data)
    }

    const showText = (e) => {
        setText(e.target.textContent)
    }

    const showUniversities = () => {
            setFlag(flag ? false : true)
    }

    useEffect(() => {
        getUniversity()

    }, [])

    return <div>
        <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
http://universities.hipolabs.com/search?country=Belarus. API возвращает
университеты страны переданной в качестве одного из доментов url. Ваша задача
отображать все университеты в тег параграф.</p>

        <button onClick={showUniversities}>{text}</button>
        {!flag ? <div>
            {res.map(el => <p onClick={showText}>{el.name}</p>)}
        </div> : null}
        
    </div>
}

export default Task36