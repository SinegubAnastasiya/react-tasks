import { useState, useCallback } from 'react';

function Task50() {
    const [list, setList] = useState(['element 1', 'element 2', 'element 3'])

    const deleteElement = useCallback((currentEl) => {
        setList(list.filter((el) => el !== currentEl))
    }, [list])

    return <div>
        <p>2. Создайте компонент, который отображает список элементов с кнопками
            "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
            Используйте useCallback, чтобы оптимизировать функцию удаления элемента.</p>


        {list.map(el => <p>{el}<button onClick={() => deleteElement(el)}>Delete</button></p>)}

    </div>
}

export default Task50