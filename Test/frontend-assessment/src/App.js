import './App.css';
import { useState, useEffect } from "react";
import FullList from "./FullList"

function App() {
  const [ listArr, setListArr] = useState([])


  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
    .then(r => r.json())
    .then(data => setListArr(data.students))
  }, []);


  // console.log(listArr)


  let studentList = listArr.map((student) => {
    // console.log(student.firstName)
    // const add = arr => arr.reduce((a, b) => a + b, 0);
    // let sum = add(student.grades)
      // let sum = student.grades.reduce((a, b) => { a + b;
      // });
      // let toInt = parseInt(student.grades, 10)
    // let totalToInt = parseInt(student.grades.map((grade) => {

    //   return(
    //     grade
    //   )
    // }));

    const grades = student.grades.map((n) => {
      return parseInt(n, 10);
  });

    const average = grades.reduce((a, b) => a + b, 0) / student.grades.length;

    console.log(student.grades)
    console.log(average)
    return (
      <div key={student.id}>
        <div>
      <img src={student.pic}  />
        </div>
      <h2>{student.firstName} {student.lastName}</h2>
      <p>Email: {student.email}</p>
      <p>Company: {student.company}</p>
      <p>Skill: {student.skill}</p>
      <p>Average: {average}%</p>
      </div>
    )
  })

  // console.log(studentList)

  return (
    <>
    {/* <FullList listArr={listArr}/> */}
    {studentList}
    </>
  )
}

export default App;
