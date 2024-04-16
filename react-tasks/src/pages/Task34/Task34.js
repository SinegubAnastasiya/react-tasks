import { useState } from 'react';

function Task34() {
    const [inp, setInp] = useState({
        inp1: '',
        inp2: ''
    })

    function setInpValue(e) {
        setInp({...inp, [e.target.id]: e.target.value})
    }

    function showResult() {
        console.log(inp);
    }

    return <div>
        <p>
        5. Напишите компонент, который будет получать значения из двух полей ввода (input) и выводить их в консоль по нажатию на кнопку. Используйте для этого только один useState.
        </p>

        <input onChange={setInpValue} id = 'inp1'></input>
        <input onChange={setInpValue} id = 'inp2'></input>

        <button onClick={showResult}>Click</button>
    </div>
}

export default Task34