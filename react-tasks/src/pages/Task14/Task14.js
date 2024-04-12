function Task14() {
    const newArr = [];
    const arr = [20, 5, 47, 3, 5, 20, 10]
    const res = arr.filter((el) => {
        if (!newArr.includes(el)) return newArr.push(el)
    });
    
    
    return <div>
        <p>
        8. Реализуйте компонент, который принимает статичный массив и отображает
только уникальные значения, убирая повторяющиеся.
        </p>

        {res}
    </div>
}

export default Task14
