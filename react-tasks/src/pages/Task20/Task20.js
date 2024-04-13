import { useState } from 'react';

function Task20() {
    const [inp, setInp] = useState('')

    function fillInp (e) {
        setInp(e.target.value)
    }

    return <div>
        <p>
        1. Создайте компонент с полем ввода и параграфом. При вводе данных в input
отображать вводимое значение в параграф текущей страницы
        </p>

        <p>{inp}</p>
        <input onChange={fillInp}></input>
    </div>
}

export default Task20