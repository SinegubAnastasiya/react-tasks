import { useState } from 'react';

function Task31() {
    const [flag, setFlag] = useState(true)

    function showMenu() {
        setFlag(flag ? false : true)

    }

    return <div>
        <p>
            2. Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По нажатию на кнопку "Открыть" меню должно отображаться.
        </p>

        {flag ?  <div>
            <p>First</p>
            <p>Second</p>
            <p>Third</p>
        </div> : null}

        <button onClick={showMenu}>Open</button>
    </div>
}

export default Task31