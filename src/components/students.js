import { useEffect, useState } from "react";
import StudentService from "../services/studentservice";

function Students() {
  let [students, setStudents] = useState([]);
  let [error,setError]=useState('')
  const getAllStudents=async ()=>{
    try {
        const response = await StudentService.getAllStudents();
        console.log(response.data);
        setStudents(response.data)
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
}
useEffect(()=>{
getAllStudents();
},[])
  return( <>
  {error}
  <b>Name  Age</b><br/>
  {students.map(s=>{return(<><b>{`${s.name} ${s.age}`}</b><br/></>)})}
  </>);
}
export default Students;
