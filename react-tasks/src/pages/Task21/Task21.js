import { useState } from 'react';

function Task20() {
    const [inp, setInp] = useState('')

    function fillInp (e) {
        setInp(e.target.value)
    }

    function checkWord () {
        if (inp === inp.split('').reverse().join('')) alert(true)
        else alert(false)
    }

    return <div>
        <p>
        2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
данные из input и проверить вводимую строку на палиндром. Результат
отображать в консоль
        </p>

        <input onChange={fillInp}></input>
        <button onClick={checkWord}>Click</button>
    </div>
}

export default Task20