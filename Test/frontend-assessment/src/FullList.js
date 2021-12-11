import ListItems from "./ListItems"

function FullList( listArr ){

    // console.log(listArr)

    let studentList = listArr.map((student) => {
        console.log(student.firstName)
        return (
          <>
          <h1>{student.firstName}</h1>
          </>
        )
      })

    return(
        <div>
        <p>{studentList}</p>
        </div>

    )


}

export default FullList