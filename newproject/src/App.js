import React, {Component, useState} from 'react';
import ReactDOM from 'react';
import './App.css';
import Person from './Person/Person'; 

class App extends Component{
state={
     persons:[
      {name:"Omer", age:"12"},
      {name:"Adi", age:"20"},
      {name:"Inbar", age:"17"}
    ],
    otherState:'some other value',
    showPersons : false
  }
  switchNameHandler=(newname)=>{ 
  this.setState({
    persons:[
    {name:"Omer", age:"12"},
    {name:"Adi", age:"20"},
    {name:newname, age:"17"}
  ]})
}
 nameChangeHandler = (event)=>{
  this.setState({
    persons:[
    {name:"Omer", age:"12"},
    {name:event.target.value, age:"20"},
    {name:"Inbar", age:"17"}
  ]})
  
}
  buttonStyle ={
  backgroundColor:"white",
  font:'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor:'pointer'
}
togglePersonsHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow});
}
render(){
  const style = {
    backgroundColor:'white'
  };

      return(
      <div className="App">
        <h1 className="title">Hi, I'm a React App</h1>
        <p>This is realy working!!</p>
        <button
        style={this.buttonStyle}
         onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {this.state.showPersons?<div>
          <Person 
          name={this.state.persons[0].name}
           age={this.state.persons[0].age}
           > My Hobbis: Gymnastics</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Adi")}
          changed={this.nameChangeHandler}>My Hobbis: BasketBall</Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          >My Hobbis: BasketBall</Person>  
            </div>:null
}       
      </div>
    );

      }
      
    }
    export default App;
