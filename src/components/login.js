import { useState } from "react";
import login from "../services/userservice";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userservice";

function Login({setUsername}){
    let [user,setUser]=useState({'email':'','password':''})
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setUser({...user,[name]:value})
    }
    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(e)
     console.log(user)
     validateUser(user)
    }
    function parseJwt(token) {//to extract the payload from JWT
        if (!token) { return }
        const base64Url = token.split('.')[1]
        console.log(base64Url)
        console.log(JSON.parse(window.atob(base64Url)))
        return JSON.parse(window.atob(base64Url))
      }
    const validateUser=async (user)=>{
        try{
          const response=await UserService.login(user)
          console.log(response)
          console.log(response.data)
          let token=response.data//JWT token
          console.log(parseJwt(token))
          let userData=parseJwt(token)//sub,iss,iat,exp,role
          localStorage.setItem('token',JSON.stringify(token))
          localStorage.setItem('username',userData.username);
          setUsername(userData.username)
          console.log(userData)
          navigate('/students')
        }catch(error){
            console.log(error)
        }
    }
    return(
    <>
    <b>Login</b>
    <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" 
                    placeholder="Enter the email" 
                    onChange={handleChange}
                    value={user.email}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" 
                    placeholder="Enter the password" 
                    onChange={handleChange}
                    value={user.password}
                    ></input>
                </div>
                <button>Submit</button>
    </form>
    </>)
}
export default Login;