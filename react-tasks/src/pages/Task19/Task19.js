function Task19() {
    const arr = [2, 5, 10, 23, 56, 92];
    
    
    function randomNum() {
        console.log(arr[Math.floor(Math.random() * arr.length)]);
    }

    return <div>
        <p>
        6. Создайте компонент с массивом элементов и кнопкой. При каждом клике на
кнопку выбирайте случайный элемент из массива и отображайте его в консоль.
        </p>

        <button onClick={randomNum}>Click</button>
    </div>
}

export default Task19