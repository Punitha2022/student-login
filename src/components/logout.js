import { useEffect } from "react"
import UserService from "../services/userservice"
import { Link } from "react-router-dom"

function Logout({setUsername}){
    useEffect(()=>{
        // UserService.logout().then(response=>{
        //     console.log(response.data)
            localStorage.removeItem('username')
            localStorage.removeItem('token')
        //  }).catch(e=>{console.log(e)})
        setUsername('')
    })
    return(
        <>
        You have successfully logged out!
        <Link to="/login">Back to login</Link>
        </>
    )
}
export default Logout