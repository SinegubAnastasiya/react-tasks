import img  from './assets/ts (1).png'

function Task4() {
    const arr = ['hello', 'my', 'world']
    return <div>
        <p>
            4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
            массива, а также картинку. Каждая итерация будет возвращать
        </p>

        {arr.map((el) => {
            return (<div>
                <p>{el}</p>
                <img src = {img} alt = 'as'></img>
            </div>)
        })}
    </div>
}

export default Task4