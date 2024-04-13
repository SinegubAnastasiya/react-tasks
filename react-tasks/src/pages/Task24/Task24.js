import { useState } from 'react';

function Task24() {
    const [inp, setInp] = useState('')
    // const [flag, setFlag] = useState('')

    // const changeState = (e) => {
//     if (!e.target.value) setFlag(false)
//     setInp(e.target.value)
// }

    // const wrapFlag = (e) => setFlag(true)

    function fillInp (e) {
        setInp(e.target.value)
    }

    function fillBtn () {
        alert(`Привет, ${inp}`)
    }

    return <div>
        <p>
        5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
поле и нажатии на кнопку, компонент должен отображать приветственное
сообщение с именем, введенным пользователем
        </p>

        {/* <p>{flag ? `hi ${inp}` : "incorrect"}</p> */}
        {/* <input onChange={changeState}></input>
        <button onClick={wrapFlag}>Click</button> */}

        <input onChange={fillInp}></input>
        <button onClick={fillBtn}>Click</button>
    </div>
}

export default Task24