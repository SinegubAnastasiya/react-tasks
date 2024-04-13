import { useState } from 'react';

function Task25() {
    // const [inp, setInp] = useState('')
    const [flag, setFlag] = useState(false)

    function showText () {
        if (!flag) setFlag(true)
        else setFlag(false)
    }

    return <div>
        <p>
        6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
текст должен появляться или исчезать
        </p>

        <p>{flag ? "hello" : ""}</p>
        <button onClick={showText}>{flag ? 'Hide' : 'Show'}</button>
    </div>
}

export default Task25