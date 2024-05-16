import { useState, useMemo } from 'react';

function Task50() {
    const [inp, setInp] = useState(0)

    const doSum = useMemo(() => {
        let sum = 0
        for (let i = 0; i <= inp; i++) {
            sum += i
        }
        return sum
    }, [inp])

    return <div>
        <p>3. Создайте компонент для отображения списка чисел от 1 до N, где N - число,
введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
сумму списка чисел только при изменении N.</p>

        <input onChange={(e) => setInp(+e.target.value)}/>
        
        <p>{doSum}</p>

    </div>
}

export default Task50