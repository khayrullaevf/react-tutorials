import { useState } from "react";
import UserDetails from "./UserDetails";



export default function Users(){
    const [users,setUsers]=useState([
        {
         id:1,
         username:'Fazliddin',
         email:'fazliddin12@gmail.com'
        },
        {
         id:2,
         username:'Messi',
         email:'messi12@gmail.com'
        },  
        {
        id:3,
        username:'Suarez',
        email:'suarez12@gmail.com'
        }
   ])

   const[username,setUsername]=useState('')
   const[email,setEmail]=useState('')
   const [counter,setCounter]=useState(4)


   return (
    <>
    <div>
      <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(username,email);

            const newUser={
                id:counter,
                username,
                email,
            }
            setCounter((currentCounter)=>currentCounter+1)
            setUsers((currentUsersState)=>[...currentUsersState,newUser])
            setUsername('')
            setEmail('')
            
        }}>
        <div>
            <label htmlFor="username"  >Username</label>
             <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email" >Email</label>
             <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <br />
        <button >Add user</button>
      </form>
      <br />
      <br />
      <br />
      <div>
        {users.map((user)=>{
           return <UserDetails user={user} key={user.id} setUsers={setUsers}/>
        })}
      </div>
    </div>
    </>
   )



}