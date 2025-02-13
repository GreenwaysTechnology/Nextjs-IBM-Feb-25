'use client'
import { useRouter } from "next/navigation"

export function DashboardComponent() {
    const router = useRouter()
    return <div>
        <h1>Dashboard Component</h1>
        <button onClick={()=>{
            router.push('/history')
        }}>go History</button>
    </div>
}