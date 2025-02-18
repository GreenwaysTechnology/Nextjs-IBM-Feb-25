import { createUser } from "@/app/actions/userAction"

//Form itself server component
export default function createUserForm() {
    return <div>
        <form action={createUser} method="POST">
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
}