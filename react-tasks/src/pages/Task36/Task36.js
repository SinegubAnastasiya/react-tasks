import { useState } from 'react';

function Task36() {
    let [inp, setInp] = useState('')

    function showStr(e) {
        setInp(e.target.textContent)
    }

    return <div>
        <p>
        7. У вас есть три кнопки: "О нас", "Цена", "Главная страница". Заголовок H1 должен отображать текст активной (нажатой) кнопки. Например, если нажата кнопка "Цена", в заголовке должно отображаться слово "Цена".
        </p>

        <h1>{inp}</h1>

        <button onClick={showStr}>О нас</button>
        <button onClick={showStr}>Цена</button>
        <button onClick={showStr}>Главная страница</button>
    </div>
}

export default Task36