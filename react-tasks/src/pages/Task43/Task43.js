import { useState } from 'react';

function Task36() {
    let [inp, setInp] = useState(0)

    const addNum = () => {
        setInp(++inp)
    }

    const minusNum = () => {
        setInp(--inp)
    }

    const resetCounter = () => {
        setInp(0)
    }

    return <div>
        <p>Создайте три кнопки с названиями: "+1", "-1", "Сброс". При нажатии на кнопку "+1"
значение счётчика увеличивается на 1, при нажатии на кнопку "-1" значение
счётчика уменьшается на 1, а при нажатии на кнопку "Сброс" значение счётчика
обнуляется. Значение счетчика отображать в h1</p>

        <p>{inp}</p>
        <button onClick={addNum}>+1</button>
        <button onClick={minusNum}>-1</button>
        <button onClick={resetCounter}>Сброс</button>
        
    </div>
}

export default Task36