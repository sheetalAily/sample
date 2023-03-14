import React from 'react'
const Student=(props)=>
{
    let data=props.data
    return(
        <div>
            <table border="2px" style={{textAlign:"center",fontweight:"bolder"}}>
                <tr>
                <th>studentPhoto</th>
                    <th>studentName</th>
                    <th>studentID</th>
                    <th>stream</th>
                    <th>course</th>
                    <th>studentPercent</th>
                    <th>mockRating</th>
                 </tr>
                 {data.map((x)=>{
                 return <tr>
                    <td>
                        <img src={x.studentPhoto} alt="" height="50px" width="50px"/>
                    </td>
                    <td>{x.studentName}</td>
                    <td>{x.studentID}</td>
                    <td>{x.stream}</td>
                    <td>
                        <ol>
                        {x.course.map((x)=>
                        {
                            return <li>{x}</li>
                        })}
                        </ol>
                    </td>
                    <td>{x.studentPercent}</td>
                    <td>{x.mockRating}</td>
                    
                 </tr>
                 
                 })}

            </table>
        </div>
    )
}
export default Student