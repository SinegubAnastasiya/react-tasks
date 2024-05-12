import { useState } from 'react';

function Task50() {
    let [res, setRes] = useState(0)
    let [mathStr, setMathStr] = useState('')
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const getMathStr = (e) => setMathStr(mathStr + e.target.textContent) 
    const getResult = () => setRes(eval(mathStr))
    const getCancel= () => {
        setRes = 0
        mathStr = ''
    }

    return <div>
        <p>6. Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /</p>

        <h1>{mathStr} = {res}</h1>

        <div>
            {numbers.map((el, index) => <button onClick={getMathStr} key={index}>{el}</button>)}
        </div>

        <button onClick={getMathStr}>+</button>
        <button onClick={getMathStr}>-</button>
        <button onClick={getMathStr}>*</button>
        <button onClick={getMathStr}>/</button>

        <button onClick={getResult}>Result</button>
        <button onClick={getCancel}>Cancel</button>
         
    </div>
}

export default Task50