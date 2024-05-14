import { useState } from 'react';

function Task53() {
    const [size, setSize] = useState('10')

    return <div>
        <p>7. Изменение размера шрифта с использованием useState: Создайте компонент,
который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
эти кнопки значение font-size изменяется соответствующим образом на +/– 1px.</p>

        <h1 style={{ fontSize: size }}>Text</h1>

        <button onClick={() => setSize(+size + 1)}>+ 1px</button>
        <button onClick={() => setSize(+size - 1)}>- 1px</button>

    </div>
}

export default Task53