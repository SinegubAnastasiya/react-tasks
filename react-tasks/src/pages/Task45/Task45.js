import { useState } from 'react';

function Task36() {
    let [flag, setFlag] = useState(true)

    const showParag = () => {
        setFlag(flag ? false : true)
    }

    return <div>
        <p>Реализовать селектор, где по клику на копку отображается 3 параграфа. При
повторном клике параграфы скрываются.</p>

       <button onClick={showParag}>Click</button>
        {!flag ? <div>
            <p>First</p>
        <p>Second</p>
        <p>Third</p>
        </div> : null}
        
    </div>
}

export default Task36