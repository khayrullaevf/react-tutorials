const App=()=>{

window.addEventListener('resize',(e)=>{
  console.log(window.innerHeight,window.innerWidth);
  
})

  return(
   <>
   <form onSubmit={
    (e)=>{
      e.preventDefault()
    //  console.log('username: '+ e.target.username.value);
    //  console.log('password: '+ e.target.password.value);
     const formData=new FormData(e.target)

     const username=formData.get('username')
     const password=formData.get('password')
     
     console.log(password);
     console.log(username);
     
     
     

    }
   } >
    <label htmlFor="username">Username</label>
    <br />
    <input type="text" id="username" name="username" placeholder="USERNAME"
   
     />
    <br />
    <label htmlFor="password">Password</label>
    <br />
    <input type="text" id="password" name="password" placeholder="PASSWORD"
     />
    <br />
    <button>Login</button>
   </form>
   </>
  )



}


export default App