import { useState, useEffect } from 'react';

function Task50() {
    let [res, setRes] = useState('')

    useEffect(() => {
        console.log(res);
    }, [res])
   

    return <div>
        <p>1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
который содержит форму с полем ввода. Используйте хук useState для хранения
значения введенного текста и хук useEffect для отслеживания изменений этого
значения. При каждом изменении значения в поле ввода, выводить его в консоль
с помощью useEffect.</p>

    <input onChange={(e) => setRes(e.target.value)}></input>
         
    </div>
}

export default Task50