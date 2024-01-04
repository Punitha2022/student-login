import axios from "axios";
const getAllStudents=()=>{
  const token=localStorage.getItem('token')
 return axios.get('http://localhost:8081/student', 
  {headers:{'Authorization':'Bearer '+JSON.parse(token)}})
}
const StudentService={
    getAllStudents
}
export default StudentService