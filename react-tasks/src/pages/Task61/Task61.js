import { useState, useRef} from 'react';

function Task50() {
    // const [data, setData] = useState('black')

    // const changeColor = () => {
    //     setData('red')
    // }
    
    // return <div>
    //     <p>1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный</p>

    // <h1 style={{color: data}}>Text</h1>
    // <button onClick={changeColor}>Click</button>
         
    // </div>

    const color = useRef()

    const changeColor = () => {
            color.current.style.color = 'red'
        }

    return <div>
        <p>1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный</p>

    <h1 ref = {color}>Text</h1>
    <button onClick={changeColor}>Click</button>
         
    </div>
}

export default Task50