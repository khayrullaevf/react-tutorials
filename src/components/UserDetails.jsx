import { useState } from "react"

 const UserDetails=({user,setUsers})=>{

    const [isEditing,setIsEditing]=useState(false)
    const [username,setUsername]=useState(user.username)
    const [email,setEmail]=useState(user.email)
 
  return (
    <>
    <button onClick={()=>{
     setIsEditing((currentState)=>!currentState)
    }}>Edit</button>
    <button onClick={
        ()=>{
            setUsers((currentUsersState)=>{
              return currentUsersState.filter((currentUser)=>currentUser.id!==user.id)
          })
        }
    }>Delete</button>
    { isEditing&&  <button
     onClick={()=>{
           setUsers((currentUsers)=>
            currentUsers.map((currentUser)=>{
            if(currentUser.id===user.id) {
            return {...currentUser,username,email}  
            }else{
            return currentUser 
            } 
          }))
         setIsEditing(false)
        }
    }
    >Save</button>}
    <div>Username : {isEditing?(
    <input 
     value={username}
     id="email"
     onChange={(e)=>setUsername(e.target.value)} 
    />)
    :(
    <span>{user.id}.{user.username}</span>
)
     }
    </div>
    <div>
        Email: {isEditing?
        <input value={email}
        id="email" 
         onChange={(e)=>setEmail(e.target.value)} 
         />
         :(
            <span>
            { user.email}</span>
            )
         }
    </div>
    </>
  )
}


export default UserDetails