import { useState } from 'react';

function Task29() {
    const [form, setForm] = useState({
        name: '',
        surname: ''
    })

    function setInputValue (e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function check () {
        console.log(form);
    }

    return <div>
        <p>
        10. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
state, первоначальное значение которого name: ‘’, surname: ‘’. Проверить
значения 2 input на пустоту. Структура state:
        </p>

        <input name = 'name' onChange={setInputValue} />
        <input name = 'surname' onChange={setInputValue}/>
        <button onClick={check}>Click</button>
        
    </div>
}

export default Task29