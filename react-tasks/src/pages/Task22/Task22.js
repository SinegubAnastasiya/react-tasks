import { useState } from 'react';

function Task22() {
    const [inp, setInp] = useState('')

    function fillInp (e) {
        setInp(e.target.value)
    }

    function checkEmail () {
        try {
            if (!/^[\w]+\@[a-z]+\.[a-z]{2,5}/gm.test(inp)) throw new Error('Incorrect')
            alert(true)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <p>
        3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
данные из input и проверить вводимую строку на почту. Результат отображать в
консоль
        </p>

        <input onChange={fillInp}></input>
        <button onClick={checkEmail}>Click</button>
    </div>
}

export default Task22