import { useState, useCallback } from 'react';

function Task50() {
    const [arr, setArr] = useState(['elem1', 'elem2', 'elem3'])
    const [inp, setInp] = useState('')

    const deleteElement = useCallback((el) => {
        setArr(arr.filter((elem) => elem != el))
    }, [arr])

    const addElement = useCallback(() => {
        setArr([...arr, inp])
    }, [inp])

    return <div>
        <p>5. Создайте компонент, который позволяет пользователю добавлять и удалять
            элементы из списка. Используйте useCallback, чтобы оптимизировать функции
            добавления и удаления элементов.</p>
        
        <input onChange={(e) => setInp(e.target.value)}></input>
        <button onClick={addElement}>Add element</button>
        {arr.map((el) => <p>{el}<button onClick={() => deleteElement(el)}>Delete</button></p>)}
        

    </div>
}

export default Task50