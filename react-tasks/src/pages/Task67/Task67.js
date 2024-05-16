import { useState, useMemo } from 'react';

function Task50() {
    const [inp1, setInp1] = useState(0)
    const [inp2, setInp2] = useState(0)

    // const doSum = () => {
    //    return inp1 + inp2
    // }

    const doSum = useMemo(() => {
        return inp1 + inp2
    }, [inp1, inp2])

    return <div>
        <p>1. Создайте компонент React, который отображает сумму двух чисел. Используй хук
useState для хранения значений чисел и хук useMemo для кэширования
результата суммы. При изменении значений чисел, сумма должна
пересчитываться только тогда, когда необходимо.</p>

        <input onChange={(e) => setInp1(+e.target.value)}/>
        <input onChange={(e) => setInp2(+e.target.value)}/>

        <p>{doSum}</p>

    </div>
}

export default Task50