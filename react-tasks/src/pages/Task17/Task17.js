function Task17() { 
    function onKeyDown(e) {
        if (e.key === 'Enter') {
            const reversed = e.target.value.split('').reverse().join('')
            console.log(reversed === e.target.value);
            e.target.value = '';
        };
    }

    return <div>
        <p>
        3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
палиндромом. Результат проверки отобразить в консоль
        </p>

        <input onKeyDown={onKeyDown}></input>
    </div>
}

export default Task17