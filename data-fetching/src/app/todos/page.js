
export async function fetchTodos() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        const response = await fetch(url)
        return response.json()
    }
    catch (err) {
        return err
    }

}
export default async function TodosPage() {
    const todos = await fetchTodos()
    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <h1>Todos Page</h1>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </div>
}