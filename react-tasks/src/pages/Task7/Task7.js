function Task7() {
    const arr = [1, -10, 25, 43, -50].map((el) => {
        return ( <p>{el < 0 ? `${el} - отриц` : `${el} - полож`}</p>)
    })

    return <div>
        <p>
        1. Создайте компонент, который принимает статичный массив чисел и выводит в
параграф информацию о положительности и отрицательности числа.
        </p>

        {arr}
    </div>
}

export default Task7