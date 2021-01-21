import React, {Component} from 'react';
import ReactDOM from 'react';
import './App.css';
import Person from './Person/Person'; 


class App extends Component{
  state = {
    persons:[
      {name:"Omer", age:"12"},
      {name:"Adi", age:"20"},
      {name:"Inbar", age:"17"}
    ]
  }
  switchNameHandler=()=>{
    //don't do this this.state.persons[0].name = "Yael";  
    this.setState({ persons:[
      {name:"Omer", age:"12"},
      {name:"Adi", age:"20"},
      {name:"Yael", age:"17"}
    ]})
  }
  render(){
      return(
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working!!</p>
        <button className="btn-change-name" onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My Hobbis: Gymnastics</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbis: BasketBall</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbis: BasketBall</Person>

      </div>
    ); 
  }
}

export default App; 

