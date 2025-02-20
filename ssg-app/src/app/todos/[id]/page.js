export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}

export default async function TodoDetailPage(props) {
    const todo = await fetchTodosByid(Number(props.params.id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}

//override this function which is called during build phase only not during runtime
//this function is used to generate html files for each todo here
//if you have 1000 todos, next will generate 100 .html files during build phase
export async function generateStaticParams() {
    const todos = await fetchTodos()
    //must return array which has id which is used for page names
    return todos.map(todo => {
        //must return object having single key
        //id must be always string
        let id = todo.id.toString()
        return {
            id:id
        }
    })
}