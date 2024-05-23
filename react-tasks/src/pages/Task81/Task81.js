import { useReducer } from 'react';

function reducer (state, data) {
    switch (data.action) {
        case 'incrementCounter':
            return state + 1
        case 'decrementCounter':
            return state - 1;
        case 'resetCounter':
            return 0;
        default: 
            return
    }
}

function Task80() {
    const [counter, dispatch] = useReducer(reducer, 0)

    return (
        
            <div>
                <p>4. Разработайте простое приложение для переключения между светлой и темной
                    темами. Используйте useContext, чтобы хранить информацию о текущей теме
                    (светлая или темная). В компоненте отобразите интерфейс, который позволяет
                    пользователю переключаться между темами.</p>

                <h1>{counter}</h1>
                <button onClick={() => dispatch({action: 'incrementCounter'})}>add +1</button>
                <button onClick={() => dispatch({action: 'decrementCounter'})}>add -1</button>
                <button onClick={() => dispatch({action: 'resetCounter'})}>reset</button>

            </div>
    )
}

export default Task80