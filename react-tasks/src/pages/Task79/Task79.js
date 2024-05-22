import { useContext } from 'react';
import { Task79Context } from '../../Context';

function Task79() {
    const weatherInfo = useContext(Task79Context)

    return <div>
        <p>3. Разработайте приложение для отображения текущей погоды. Используйте
useContext, чтобы хранить информацию о погоде (температура, влажность,
скорость ветра и т. д.). В компоненте отобразите эту информацию о погоде.</p>

        <p>Temperature: {weatherInfo.temperature}</p>
        <p>Humidity: {weatherInfo.humidity}</p>
        <p>Wind speed: {weatherInfo.windSpeed}</p>

    </div>
}

export default Task79