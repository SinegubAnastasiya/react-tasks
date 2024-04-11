import { Routes, Route } from 'react-router-dom';
import Task4 from './pages/Task4/Task4';
import Task1 from './pages/Task1/Task1';
import Task2 from './pages/Task2/Task2';
import Task3 from './pages/Task3/Task3';
import Task5 from './pages/Task5/Task5';
import Task6 from './pages/Task6/Task6';
import Task7 from './pages/Task7/Task7';
import Task8 from './pages/Task8/Task8';
import Task9 from './pages/Task9/Task9';
import Task10 from './pages/Task10/Task10';
import Task15 from './pages/Task15/Task15';
import Task16 from './pages/Task16/Task16';
import Task17 from './pages/Task17/Task17';

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/task1' element = {<Task1/>}></Route>
        <Route path = '/task2' element = {<Task2/>}></Route>
        <Route path = '/task3' element = {<Task3/>}></Route>
        <Route path = '/task4' element = {<Task4/>}></Route>
        <Route path = '/task5' element = {<Task5/>}></Route>
        <Route path = '/task6' element = {<Task6/>}></Route>
        <Route path = '/task7' element = {<Task7/>}></Route>
        <Route path = '/task8' element = {<Task8/>}></Route>
        <Route path = '/task9' element = {<Task9/>}></Route>
        <Route path = '/task10' element = {<Task10/>}></Route>
        <Route path = '/task15' element = {<Task15/>}></Route>
        <Route path = '/task16' element = {<Task16/>}></Route>
        <Route path = '/task17' element = {<Task17/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
