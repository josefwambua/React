import React, { useEffect, useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);
   useEffect( () => {
    document.title =`Clicked ${count} times`

    });
  const increment = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <h2>Counter Increment</h2>
      <button onClick={increment}>Increment {count}</button>
      </div>
  );

}


// class App extends Component {
//   state ={
//     count: 0
//   };
//   increment = ()=>{
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
//     componentWillMount(){
//       document.title = `Clicked ${this.state.count} times`;
//     }
  
//     componentDidUpdate(){
//       document.title = `Clicked ${this.state.count} times`;
//     }


// render(){
//   return (
//     <div>
//       <h2>Counter App</h2>
//       <button onClick={this.increment}>Increment {this.state.count}</button>
//       </div>
//   )
// }
// }


export default App;
