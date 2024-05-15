import { useRef} from 'react';

function Task50() {
    const h_1 = useRef()
    
    return <div>
        <p>1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный</p>

    <h1 ref = {h_1}>Text</h1>
    <button onClick={() => h_1.current.style.color = `#${Math.floor(Math.random() * 999)}`}>Click</button>
         
    </div>
}

export default Task50