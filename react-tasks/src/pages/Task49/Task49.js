import { useState } from 'react';

function Task49() {
    const [color, setColor] = useState('black')

    return <div>
        <p>3. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
который позволяет пользователю выбирать цвет из списка и отображает цвет
выбранного цвета на экране.</p>

        <h1 style={{ color: color }}>Text</h1>

        <ul onClick={(e) => setColor(e.target.textContent)}>
            <li>green</li>
            <li>red</li>
            <li>pink</li>
            <li>brown</li>
        </ul>

    </div>
}

export default Task49