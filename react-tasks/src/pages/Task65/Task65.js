import { useRef } from 'react';

function Task50() {
    const btn = useRef(0)

    const countClick = () => {
        btn.current++
        console.log(btn.current);
    }

    return <div>
        <p>5. Реализуйте компонент, который отслеживает количество кликов на кнопку с
помощью useRef и выводит это число в консоль при каждом клике.</p>

    <button onClick={countClick}>Click</button>

    </div>
}

export default Task50