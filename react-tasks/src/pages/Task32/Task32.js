import { useState } from 'react';

function Task32() {
    let [click, setClick] = useState(0)

    function countClick(e) {
        setClick(++click)
    }

    return <div>
        <p>
        3. Разработайте компонент, который будет отслеживать количество кликов по кнопке и отображать это число.
        </p>

        <p>{click}</p>

        <button onClick={countClick}>Click</button>
    </div>
}

export default Task32