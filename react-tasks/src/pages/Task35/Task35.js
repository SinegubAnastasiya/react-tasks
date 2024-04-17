import { useState } from 'react';

function Task35() {
    const [inp, setInp] = useState('')

    const arr = ['hello', 'world', 'chicken', 'duck']

    function showStr() {
        setInp(arr[Math.floor((Math.random() * arr.length))])
    }

    return <div>
        <p>
        6. Создайте компонент, который при нажатии на кнопку будет показывать случайную строку в заголовке H1. Строки хранятся в массиве.
        </p>

        <h1>{inp}</h1>

        <button onClick={showStr}>Show</button>
    </div>
}

export default Task35