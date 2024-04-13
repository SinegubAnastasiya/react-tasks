import { useState } from 'react';

function Task26() {
    let [inp, setInp] = useState(0)

    function addNum () {
        setInp(++inp)
    }

    function minusNum () {
        setInp(--inp)
    }

    return <div>
        <p>
        8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом
для отображения результата счетчика (изначально счетчик равен 0). Ваша задача
так реализовать функционал, чтобы при клике на кнопку +1 автоматически
прибавлялась +1 к стейту счетчика, а при клике на кнопку -1, происходило
вычитание значения 1
        </p>

        <p>{inp}</p>
        <button onClick={addNum}>+1</button>
        <button onClick={minusNum}>-1</button>
    </div>
}

export default Task26