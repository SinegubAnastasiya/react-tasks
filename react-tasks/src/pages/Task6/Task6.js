function Task6() {
    const arr = [
        { title: 'title1', description: 'description1' },
        { title: 'title2', description: 'description2' },
        { title: 'title3', description: 'description3' },
        { title: 'title4', description: 'description4' },
    ].map((el) => {
        return <div>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
        </div>
    })

    return <div>
        <p>
            6. На входе массив из объектов. каждый объект содержит title с названием фильма и
            description с кратким описанием фильма. В h1 отобразить каждый title, в p -
            description
        </p>

        {arr}
    </div>
}

export default Task6