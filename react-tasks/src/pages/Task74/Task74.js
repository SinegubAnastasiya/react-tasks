import { useState, useCallback } from 'react';

function Task50() {
    const [status, setStatus] = useState('Неактивный')

    const changeStatus = useCallback(() => {
        status === 'Неактивный' ? setStatus('Активный') : setStatus('Неактивный')
    }, [status])

    return <div>
        <p>3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
Используйте useCallback, чтобы оптимизировать функцию изменения статуса.</p>

        <p>{status}</p>
        <button onClick={changeStatus}>Change status</button>

    </div>
}

export default Task50