import { useState } from 'react';

function Task50() {
    const [inp, setInp] = useState('')
    const [res, setRes] = useState('')

    const checkExpression = () => {
        setRes(/^[\w]+@[a-z]+\.[a-z]{2,5}$/gm.test(inp))
    }

    return <div>
        <p>5. Форма с использованием useState: Создайте компонент текстового поля, который
позволяет пользователю вводить текст и проверять введенный текст регулярным
выражением на почту по нажатию на кнопку. В заголовок отобразить true если
введенная строка удовлетворяет регулярному выражению и false в противном
случае.</p>

        <input onChange={(e) => setInp(e.target.value)}></input>
        <button onClick={checkExpression}>Check</button>

        <h1>{String(res)}</h1>

    </div>
}

export default Task50