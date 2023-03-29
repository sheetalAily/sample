import React from 'react'
import reactproject from './reactproject.json';
const reactproject=(props)=>
{
    let data=props.data
    return(
        <div>
            <table border="2px" style={{textAlign:"center",fontweight:"bolder"}}>

                 {data.map((x)=>{
                 return <tr>
                    <td>
                        <img src={x.img} alt="" height="50px" width="50px"/>
                    </td>
                    <td>{x.name}</td>
                    <td>{x.gmail}</td>
                    <td>{x.phone}</td>
                    <td>{x.org}</td>
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
export default reactproject