import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Task36() {
    const [res, setRes] = useState('')

    const getImg = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')

        setRes(response.data.message)
    }

    useEffect(() => {
        getImg()

    }, [])

    return <div>
        <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
https://dog.ceo/api/breeds/image/random. API возвращает ссылку на случайные
изображения. Ваша задача отображать картинки в img.</p>

    <img src={res} alt=''></img>

    <button>Click</button>
        
    </div>
}

export default Task36