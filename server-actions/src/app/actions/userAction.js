//server actions are not components but it is pieace of code which is executed in server
'use server'

import { redirect } from "next/navigation"

// export async function createUser(data) {
//     console.log('server actions', data)
//     console.log(data.get('name'))
//     console.log(data.get('email'))

//     return {
//         success: true, message: 'Data saved successfully'
//     }
// }

//redirection
// export async function createUser(data) {
//     console.log('server actions', data)
//     console.log(data.get('name'))
//     console.log(data.get('email'))

//     //redirect
//     redirect('/success')
// }

//sending data to success page

export async function createUser(formData) {
    console.log('Server actions', formData)
    //db operation here it can go ;  you can use prisma over here

    //    return { success: true, message: 'Data Saved successfully' }
   // redirect('/success')
   
  redirect(`/success?name=${encodeURIComponent(formData.get("name"))}&email=${encodeURIComponent(formData.get("email"))}`);
}