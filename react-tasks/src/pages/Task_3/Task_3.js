import { useState, useMemo } from 'react';

function Task3() {
    const [num, setNum] = useState(0)

    const doSum = useMemo(() => {
        let sum = 0
        for (let i = 0; i <= num; i++) {
            sum += i
        }
        return sum
    }, [num])

    return <div>

        <input onChange={(e) => setNum(+e.target.value)}/>
        
        <p>{doSum}</p>

    </div>
}

export default Task3