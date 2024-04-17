import { useState } from 'react';

function Task35() {
    let [inp, setInp] = useState('')

    function setInpValue (e) {
        setInp(e.target.value)
    }
    
    function getResult() {
        setInp(eval(inp))
    }

    return <div>
        <p>
        8. Создайте поле ввода, в которое пользователь вводит математическое выражение. По нажатию на кнопку необходимо вычислить результат выражения (используйте функцию eval()) и отобразить его в заголовке H1.
        </p>

        <input onChange={setInpValue}></input>
        <h1>{inp}</h1>

        <button onClick={getResult}>Show</button>
    </div>
}

export default Task35