import { useState } from 'react';

function Task47() {
    const [inp, setInp] = useState('')

    return <div>
        <p>1. Форма с использованием useState: Создайте компонент текстового поля, который
позволяет пользователю по изменению значения инпута отображать значение в
консоль.</p>

        <input onChange={(e) => setInp(e.target.value)}></input>
        <p>{inp}</p>
        
    </div>
}

export default Task47