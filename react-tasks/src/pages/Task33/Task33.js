import { useState } from 'react';

function Task33() {
    let [inp, setInp] = useState('')

    function showInp(e) {
        setInp(e.target.value)
    }

    return <div>
        <p>
        4. Выводите каждое введенное значение из поля ввода (input) в заголовке H1.
        </p>

        <h1>{inp}</h1>

        <input onChange={showInp}></input>
    </div>
}

export default Task33