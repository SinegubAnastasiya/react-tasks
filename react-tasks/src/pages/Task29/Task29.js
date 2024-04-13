import { useState } from 'react';

function Task29() {
    const [form, setForm] = useState({
        name: '',
        surname: ''
    })

    function showName () {

    }

    return <div>
        <p>
        10. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
state, первоначальное значение которого name: ‘’, surname: ‘’. Проверить
значения 2 input на пустоту. Структура state:
        </p>

        <input></input>
        <input></input>
        {/* <button onClick={}>Click</button> */}
        
    </div>
}

export default Task29