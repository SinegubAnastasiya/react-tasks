function Task10() {
    const arr = ['mfkslmf', 5, 'fmslmg', 3, 10];
    
    return <div>
        <p>
        4. Создайте компонент, который принимает статичный массив чисел и строк. Если
элемент - число, то отобразите его в параграфе с зеленым цветом текста, если
строка - с синим.
        </p>

        {arr.map((el) => {return typeof el === 'number' ? <p style={{color: "green"}}>{el}</p> : <p style={{color: "blue"}}>{el}</p>})}
    </div>
}

export default Task10