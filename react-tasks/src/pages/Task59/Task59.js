import { useState, useEffect } from 'react';

function Task50() {
    let [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    return <div>
        <p>4. Таймер с использованием useState и useEffect: Создайте компонент, который
отображает текущее время и обновляет его каждую секунду.</p>

    <p>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</p>
         
    </div>
}

export default Task50