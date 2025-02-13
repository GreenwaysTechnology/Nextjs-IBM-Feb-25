// import { TODOS } from "../mock-data/todos";
import { TODOS } from "@/app/mock-data/todos" //import alise

import Link from "next/link";

export default function TodosPage() {
    return <div>
        <ul>
            {
                TODOS.map(todo => {
                    return <li key={todo.id}><span>
                        <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                    </span></li>

                })
            }
        </ul>
    </div>
}