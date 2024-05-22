import { useContext } from 'react';
import { Task78Context } from '../../Context';

function Task78() {
    const [language, changeLang, obj] = useContext(Task78Context)

    return <div>
        <p>Создайте приложение, где пользователь сможет выбирать язык интерфейса
            (например, английский или испанский). Используйте useContext для сохранения
            текущего выбранного языка и перевода текста в выбранный язык в компонентах</p>

        <ul>
            <li>ru</li>
            <li>en</li>
            <li>pl</li>
        </ul>
        <p>{obj[language]}</p>


    </div>
}

export default Task78