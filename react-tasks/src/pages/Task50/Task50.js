import { useState } from 'react';

function Task50() {
    const [task, setTask] = useState(['task1', 'task2', 'task3'])
    const [inp, setInp] = useState('')

    const deleteTask = (e) => {
        setTask(task.filter((el) => el !== e.target.id))
    }

    return <div>
        <p>4. Список задач с использованием useState: Создайте компонент списка задач,
            который позволяет пользователю добавлять и удалять задачи из списка</p>

        <div>
            {task.map((el, index) => (
                <>
                    <p key={index}>{el}</p>
                    <button id={el} onClick={deleteTask}>Delete</button>

                </>
            ))}
            <div>
                <input onChange={(e) => setInp(e.target.value)}></input>
                <button onClick={() => setTask([...task, inp])}>Add</button>
            </div>
        </div>

    </div>
}

export default Task50