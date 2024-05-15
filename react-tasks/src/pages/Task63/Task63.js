import { useRef, useState } from 'react';

function Task50() {
    // const [size, setSize] = useState(10)

    const h_1 = useRef()

    const changeSize = () => {
    h_1.current.style.fontSize = parseInt(h_1.current.style.fontSize) + 1 + 'px'
    }

    const changeSize_ = () => {
    h_1.current.style.fontSize = parseInt(h_1.current.style.fontSize) - 1 + 'px'
    }

    return <div>
        <p>3. Создайте компонент, который при каждом клике на кнопку увеличивает размер
шрифта текста в элементе на странице.</p>

    <h1 ref = {h_1} style={{ fontSize: 18 }}>Text</h1>
    <button onClick={changeSize}>Add</button>
    <button onClick={changeSize_}>Del</button>
         
    </div>
}

export default Task50