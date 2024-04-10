function Task3 () {
    const arr = ['agsv', 'nd@gbd', 'mdfk', 'bsd@vbd'].filter((el) => 
    el.includes('@'))

    return <div>
        <p>
        3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
странице только те строки, которые содержат знак @
        </p>

        {arr}
    </div>
}

export default Task3