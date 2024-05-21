import { useContext } from 'react';
import { Task77Context } from '../../Context';

function Task50() {
    const userInfo = useContext(Task77Context)

    return <div>
        <p>1. Используйте useContext, чтобы сохранять данные о текущем пользователе.
Отобразите эту информацию в компоненте, используя контекст.</p>
        
        <p>{userInfo.name}</p>
        <p>{userInfo.surname}</p>
        <p>{userInfo.age}</p>
        <p>{userInfo.email}</p>
        

    </div>
}

export default Task50