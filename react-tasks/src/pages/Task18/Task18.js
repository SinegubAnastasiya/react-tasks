function Task18() {
    const arr = [2, 5, 10];
    
    
    function sumNums() {
        const res = arr.reduce((sum, el) => sum + el, 0)
        alert(res);
    }

    return <div>
        <p>
        5. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку
вычислите и выведите сумму всех чисел из массива в консоль.
        </p>

        <button onClick={sumNums}>Click</button>
    </div>
}

export default Task18