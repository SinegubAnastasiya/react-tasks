function Task15() {
    const pwd = 'kmfds2mdl';
    
    function checkPwd() {
        try {
            if (!/^[\w\.\_\-\@\$\&]{8,}/gm.test(pwd)) throw new Error('Pwd is incorrect')
            alert(true)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <p>
        1. На входе переменная пароля. По клику на кнопку необходимо реализовать метод
валидации. Написать регулярное выражение: пароль от 8 символов, содержит
числа, буквы, !@#$^&*. Результат отобразить в консоль
        </p>

        <button onClick={checkPwd}>Click</button>
    </div>
}

export default Task15