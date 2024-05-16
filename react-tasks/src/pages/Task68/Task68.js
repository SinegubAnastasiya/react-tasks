import { useState, useMemo } from 'react';

function Task50() {
    const [inp, setInp] = useState(1)

    const getFact = (inp) => {
        if (inp <= 1) return 1
        return inp * getFact(inp - 1)
    }

    const res = useMemo(() => {
       return getFact(inp)
    }, [inp])

    return <div>
        <p>1. Создайте компонент React, который отображает сумму двух чисел. Используй хук
useState для хранения значений чисел и хук useMemo для кэширования
результата суммы. При изменении значений чисел, сумма должна
пересчитываться только тогда, когда необходимо.</p>

        <input onChange={(e) => setInp(+e.target.value)}/>
        
        <p>{res}</p>

    </div>
}

export default Task50