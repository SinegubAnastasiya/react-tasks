import { useState } from 'react';

function Task26() {
    let [inp, setInp] = useState(0)

    function addNum () {
        setInp(++inp)
    }

    return <div>
        <p>
        7. Создайте компонент с кнопкой и параграфом для отображения результата
счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал,
чтобы при клике на кнопку автоматически прибавлялась +1 к стейту счетчика
        </p>

        <p>{inp}</p>
        <button onClick={addNum}>Add +1</button>
    </div>
}

export default Task26