import { useState } from 'react';

function Task50() {
    const [flag, setFlag] = useState(true)

    return <div>
        <p>8. Отображение навигации с использованием useState: По нажатию на кнопку
“бургер” отображать блок навигации из 4 параграфов.</p>
        
        <button onClick={() => setFlag(!flag)}>Click me</button>

        {!flag ? <div>
            <p>Paragraph1</p>
            <p>Paragraph2</p>
            <p>Paragraph3</p>
            <p>Paragraph4</p>
        </div> : null}

    </div>
}

export default Task50