import { useState } from 'react';

function Task36() {
    let [inp, setInp] = useState('')

    const showInp = (e) => {
        setInp(e.target.value)
    }

    return <div>
        <p>Создайте форму ввода, в которой пользователь может вводить своё имя и
отображать его под формой.</p>

        <input onChange={showInp}></input>
        <p>{inp}</p>
        
    </div>
}

export default Task36