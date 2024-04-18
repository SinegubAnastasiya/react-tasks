import { useState } from 'react';

function Task36() {
    const [list, setList] = useState(['do', 'get', 'set', 'drive'])
    const [data, setData] = useState('')

    const removeItem = (e) => setList(list.filter(el => el !== e.target.id))

    return <div>
        <input  value={data}  onChange={(e) => setData(e.target.value)}></input>

        <button onClick={() => {
            setList([...list, data])
            setData('')
        }}>Click</button>

        {list.map(el => <p>{el}<button id = {el} onClick={removeItem}>Delete</button></p>)}
    </div>
}

export default Task36