import { useState } from 'react';

function Task22() {
    const [inp, setInp] = useState('')
    const [inp2, setInp2] = useState('')

    function fillInp (e) {
        setInp(e.target.value)
    }

    function fillInp2 (e) {
        setInp2(e.target.value)
    }

    function compareInp () {
        alert (inp === inp2 ? true : false)
    }

    return <div>
        <p>
        4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать
данные из двух input (2 разных state). Сравнить значения 2 input на равенство.
Результат отображать в консоль
        </p>

        <input onChange={fillInp}></input>
        <input onChange={fillInp2}></input>
        <button onClick={compareInp}>Click</button>
    </div>
}

export default Task22