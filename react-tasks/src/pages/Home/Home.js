import { Link } from "react-router-dom";

function Home () {
    return <>
        <h1>React tasks</h1>

        <p><Link to = '/task1'>Task 1</Link></p>
        <p><Link to = '/task30'>Task 30</Link></p>
        <p><Link to = '/task31'>Task 31</Link></p>
        <p><Link to = '/task32'>Task 32</Link></p>
        <p><Link to = '/task33'>Task 33</Link></p>
        <p><Link to = '/task34'>Task 34</Link></p>
        <p><Link to = '/task35'>Task 35</Link></p>
        <p><Link to = '/task36'>Task 36</Link></p>
        <p><Link to = '/task37'>Task 37</Link></p>
    </>
}

export default Home;