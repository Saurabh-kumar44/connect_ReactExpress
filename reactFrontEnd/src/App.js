import { useState,useEffect } from 'react';
import axios from 'axios'
import './App.css';


function App() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    async function getAllStudent(){
      try{                              //1 error->theory
        const students = await axios.get("http://localhost:5000/api/student")//we only want to get the data so we'r using .get
        console.log(students.data);                                         
        setStudents(students.data);//giving all the to the (students state)
      }catch(err){
        console.log(err);
      }
    }
    getAllStudent();
  },[])
  return (
    <div className="App">
      <h1>Connect React to Express</h1>
    </div>
  );
}

export default App;
