//we are going to submit form to the server actions.
'use client'

import { createUser } from "@/app/actions/userAction"

export default function CreateUserForm() {
    async function handleSubmit(event) {
        event.preventDefault()
        const data = {
            name: event.target.name.value,
            email: event.target.email.value
        }
        try {
            const result = await createUser(data)
            alert(`User Created : ${result.message}`)
        }
        catch (err) {
            alert(`Error ${error.message}`)
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" placeholder="Name" required />
            </div>
            <div>
                <input type="text" name="email" placeholder="Email" required />
            </div>
            <div>
                <button type="submit">Create User</button>
            </div>
        </form>
    </div>
}