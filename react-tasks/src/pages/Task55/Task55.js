import { useState } from 'react';
import axios from 'axios';

function Task50() {
    const [inp, setInp] = useState('')
    const [res, setRes] = useState('')

    const getAnswer = async () => {
        const response = await axios.get('https://yesno.wtf/api')
        setRes(response.data.answer)
    }

    return <div>
        <p>9. Форма с отправкой запроса к API с использованием useState: Создайте
компонент, который предоставляет input, button. После ввода данных в input по
нажатию кнопку необходимо отправлять асинхронный запрос к API
https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
Отобразить результат в заголовок. Таким образом у вас получается игра в
предсказателя: где пользователь вводит вопрос в input, а далее получает ответ на
заданный вопрос.</p>

        <input onChange={(e) => setInp(e.target.value)} />
        <button onClick={getAnswer}>Get answer</button>

        <p>Question: {inp}</p>
        <p>Answer: {res}</p>

    </div>
}

export default Task50