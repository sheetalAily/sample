
import React,{Component} from "react";
import JSON from"./components/Student.json";
import Student from "./components/Student.jsx";
 // import Course from './components/Course.jsx';
 


//  const App=()=> {
//   return (
//   <>

//     <Course courseDetails={{
//       courseName:"Java Full Stack",
//       courseAvail:true,
//       courseDur:"6months"
//     }}/>
//     </>
  
//   );
// }

// export default App;



export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      json:JSON
    }
  }
  render() {
    return (
      <div>
        <Student data={this.state.json}/>
      </div>
    )
  }
}

