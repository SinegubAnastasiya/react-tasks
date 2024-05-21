import { useState, useCallback } from 'react';

function Task50() {
    const [count, setCount] = useState(0)

    const changeCount = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return <div>
        <p>1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
оптимизировать обработчик клика на кнопке.</p>

        <p>{count}</p>
        <button onClick={changeCount}>Увеличить счетчик</button>

    </div>
}

export default Task50