import React from 'react'


const Course = (props) => {
 if(props.courseDetails.courseAvail===true)
 {
    return (
        <>
        <h1>{props.courseDetails.courseName}</h1>
        <h2>{props.courseDetails.courseDur}</h2>
        <button style={{color:"green"}}>Availability</button>
        </>
      )

 }
 else{
    return (
        <>
        <h1>{props.courseDetails.courseName}</h1>
        <h2>{props.courseDetails.courseDur}</h2>
        <button style={{color:"red"}}>Availability</button>
        </>
      )


 }
    
}

export default Course