import { useState, useMemo } from 'react';

function Task50() {
    const [inp, setInp] = useState('')

    const reverseString = useMemo(() => {
        return inp.split('').reverse().join('')
    })

    return <div>
        <p>4. Напишите программу, которая принимает строку от пользователя и выводит ее в
обратном порядке. Используй хук useState для хранения строки и хук useMemo
для кэширования результата.</p>

        <input onChange={(e) => setInp(e.target.value)}/>
        
        <p>{reverseString}</p>

    </div>
}

export default Task50