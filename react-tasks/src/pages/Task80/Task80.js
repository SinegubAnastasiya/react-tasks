import { useContext } from 'react';
import { Task80Context } from '../../Context';

function Task80() {
    const theme = useContext(Task80Context)

    const changeTheme = () => {
        if (theme.flag) {
            theme.setBackground('black')
            theme.setColor('white')
            theme.setFlag(false)
        } else {
            theme.setBackground('white')
            theme.setColor('black')
            theme.setFlag(true)
        }
    }

    return (
        <body style={{ backgroundColor: theme.background, color: theme.color }}>
            <div>
                <p>4. Разработайте простое приложение для переключения между светлой и темной
                    темами. Используйте useContext, чтобы хранить информацию о текущей теме
                    (светлая или темная). В компоненте отобразите интерфейс, который позволяет
                    пользователю переключаться между темами.</p>

                <button onClick={changeTheme}>Change theme</button>

            </div>

        </body>
    )
}

export default Task80