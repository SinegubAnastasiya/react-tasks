import { useRef} from 'react';

function Task2() {
    const h_1 = useRef()
    
    return <div>

    <h1 ref ={h_1}>Title</h1>
    <button onClick={() => h_1.current.style.color = `#${Math.floor(Math.random() * 999)}`}>Change color</button>
         
    </div>
}

export default Task2