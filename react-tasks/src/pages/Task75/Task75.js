import { useState, useCallback } from 'react';

function Task50() {
    const [color, setColor] = useState()

    const changeColor = useCallback((e) => {
        setColor(e.target.textContent)
    }, [color])

    return <div>
        <p>4. Создайте компонент, который предоставляет пользователю выбор цвета из
списка. При выборе цвета, компонент должен отображать выбранный цвет на
странице. Используйте useCallback, чтобы оптимизировать функцию выбора
цвета.</p>

    <p style={{ backgroundColor: color }}>Hello</p>
    <ul>
        <li onClick={changeColor}>red</li>
        <li onClick={changeColor}>pink</li>
        <li onClick={changeColor}>green</li>
        <li onClick={changeColor}>yellow</li>
        <li onClick={changeColor}>brown</li>
    </ul>

    </div>
}

export default Task50