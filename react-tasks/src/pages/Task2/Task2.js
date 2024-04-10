function Task2 () {
    const arr = [1, 4, 9, 16].map(el => Math.sqrt(el))

    return <div>
        <p>2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
отобразить на странице в виде h1</p>

        <h1> {arr} </h1>

    </div>
}

export default Task2