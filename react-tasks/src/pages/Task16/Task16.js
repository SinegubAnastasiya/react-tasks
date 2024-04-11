function Task16() { 
    function showInputValue(e) {
        console.log(e.target.value);
    }

    return <div>
        <p>
        2. По событию изменения input отображать в консоль каждое вводимое значение
        </p>

        <input onChange={showInputValue}></input>
    </div>
}

export default Task16