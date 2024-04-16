import { useState } from 'react';

function Task30() {
    const [color, setColor] = useState('black')
    const [flag, setFlag] = useState(true)


    const arr = ['red', 'green', 'pink', 'yellow', 'brown']

    function changeColor () {
        setFlag(flag ? false : true)
        setColor(arr[Math.floor(Math.random() * arr.length)])
    }

    return <div>
        <p>
        1. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет шрифта заголовка H1 должен измениться. При следующем клике цвет должен вернуться в первоначальное состояние. Текст кнопки также должен меняться с "Открыто" на "Закрыто" при нажатии на саму кнопку.
        </p>

        <h1 style = {{color: color}}>Text</h1>

        <button onClick={changeColor}>{flag ? 'Добавить цвет' : 'Убрать цвет'}</button>
    </div>
}

export default Task30