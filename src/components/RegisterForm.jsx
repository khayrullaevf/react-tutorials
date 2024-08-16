import { useState } from "react"
export default function RegisterForm(){
 const [formFields,setFormFields]=useState({
    username:'',
    password:'',
    displayname:''
 })


 const isDisabled=!formFields.username||!formFields.displayname||!formFields.password

console.log(formFields);



  return(
<>
<form  >
  <div>
    
  <label htmlFor="username">Username</label>
  <input type="text" id="username" value={formFields.username} onChange={(e)=>{
    setFormFields((currentState)=>({...currentState, username:e.target.value}))
  }}/>
  </div>
  <div>
  <label htmlFor="password">Password</label>
  <input type="text" id="password" value={formFields.password}  onChange={(e)=>{
    setFormFields((currentState)=>({...currentState, password:e.target.value}))
  }}/>
  </div>
  <div>
  <label htmlFor="displayName">Display name</label>
  <input type="text" id="displayName"  value={formFields.displayname} onChange={(e)=>{
    setFormFields((currentState)=>
        ({...currentState, displayname:e.target.value})
    )
  }}/>
  </div>
  <button disabled={isDisabled} type="submit">Register</button>
  </form>
  <h1>{formFields.username}</h1>
  <h1>{formFields.password}</h1>
  <h1>{formFields.displayname}</h1>
</>
  )

}