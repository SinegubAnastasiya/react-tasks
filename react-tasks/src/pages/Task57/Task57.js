import { useState, useEffect } from 'react';

function Task50() {
    let [time, setTime] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, )
   

    return <div>
        <p>2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
который увеличивает значение счетчика на 1 каждую секунду с использованием
useEffect.</p>

    <h1>{time}</h1>
         
    </div>
}

export default Task50