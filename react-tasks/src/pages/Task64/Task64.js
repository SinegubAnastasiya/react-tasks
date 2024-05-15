import { useRef } from 'react';

function Task50() {
    const inp = useRef()

    return <div>
        <p>4. Создайте компонент, который при фокусе на текстовом поле добавляет
background (onFocus, onBlur)</p>

    <input type='text' ref = {inp} onFocus={
        () => inp.current.style.background ='pink'
        } onBlur={
        () => inp.current.style.background ='white'
        } />

    </div>
}

export default Task50