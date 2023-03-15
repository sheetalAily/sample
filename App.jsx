
import React,{Component} from "react";
import counter from "./components/counter.css"
// import JSON from"./components/Student.json";
// import Student from "./components/Student.jsx";
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
      username:"MANJU",
      count:0
    }
  }
  handleIncrement=()=>
  {
    this.setState({count:this.state.count+1})
  }
   handleDecrement=()=>
   {
    this.setState({count:this.state.count-1})
   }
   handleReset=()=>
   {
    this.setState({count:0})
   }
  render() {
    return (
      <center>
        <div className="mainBlock">
        <h1>{this.state.count}</h1>
        <div className="btnGroup">
          <button onClick={this.handleIncrement}>+ Increment</button>
          <button onClick={this.handleDecrement}>- Decrement</button>
          <button onClick={this.handleReset}>RESET</button>
        </div>
        {/* <Student data={this.state.json}/> */}
      </div>


      </center>
    )
  }
}

