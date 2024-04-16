// 

import { Link } from "react-router-dom";

function Task1 () {
    const arr = [1, 2, 3, 4, 5].map(el => el ** 2);

    return <div>
        <p> 1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и отобразить на странице </p>

        {arr}

        <p><Link to = '/'></Link>Page Home</p>
    </div>
}

export default Task1