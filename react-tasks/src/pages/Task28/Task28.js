import { useState } from 'react';

function Task26() {
    let [inp, setInp] = useState(0)

    function addNum () {
        setInp(++inp)
    }

    function minusNum () {
        setInp(--inp)
    }

    function resetCounter () {
        setInp(0)
    }

    return <div>
        <p>
        9. Дополните предыдущую задачу. Создайте компонент, который отображает
счетчик и кнопку "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в
ноль. Используйте useState, чтобы управлять значением счетчика.
        </p>

        <p>{inp}</p>
        <button onClick={addNum}>+1</button>
        <button onClick={minusNum}>-1</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
}

export default Task26