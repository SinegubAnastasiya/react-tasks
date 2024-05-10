import { useState } from 'react';

function Task48() {
    const [flag, setFlag] = useState(false)

    const getFlag = () => setFlag(flag ? false : true)


    return <div>
        <p>2. Отображение текста с использованием useState: Создайте компонент, который
предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
отображается текст, а при нажатии на "Скрыть" текст скрывается.</p>

        <p>{flag ? 'Text' : ''}</p>
        <button onClick={getFlag}>{!flag ? 'Показать' : 'Скрыть'}</button>
        
    </div>
}

export default Task48