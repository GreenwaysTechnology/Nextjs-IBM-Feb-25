import { TODOS } from "@/app/mock-data/todos"

export default async function TodosDetailsPage(props) {
    const todosId = await props.params.id
    const todo = TODOS.find(todo => todo.id == todosId)
    return <div>
        <h1> {todosId} details</h1>
        {/*  */}
        <h2>{todo.title}</h2>
        <h3>{todo.status ? 'done' : 'not done'}</h3>

    </div>
}