import React, {Component, useState} from 'react';
import ReactDOM from 'react';
import './App.css';
import Person from './Person/Person'; 
import Validation from './ValidationComponent/Validation'
import Char from './Char/Char';
class App extends Component{
state={
     persons:[
      {id:"2703",name:"Omer", age:"12"},
      {id:"2403",name:"Adi", age:"20"},
      {id:"0105",name:"Inbar", age:"17"}
    ],
    otherState:'some other value',
    showPersons : false,
    userInput:""
  }
 
 nameChangeHandler = (event, id)=>{
   const personIndex = this.state.persons.findIndex(p=>{
     return p.id === id;
   });
   const person ={...this.state.persons[personIndex]
   };
   //const person ={Object.assign({}, this.state.persons[personIndex])};
   person.name = event.target.value
   const persons = [...this.state.persons];
   persons[personIndex] = person

  this.setState({persons:persons})
  
}

deletePersonHandler = (personIndex) =>{
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons})
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
inputChangeHandler= (event)=>{
  this.setState({userInput:event.target.value});
}
deleteCharHandler =(index)=>{
  const text = this.state.userInput.split('');
  text.split(index,1);
  const updateText = text.join('');
  this.setState({userInput:updateText});
}
render(){
  const charList = this.state.userInput.split('').map((ch, index)=>{
    return <Char 
    character = {ch} 
    key={index}
    clicked = {()=>this.deleteCharHandler(index)} />;
  });
  let persons = null;
  if(this.state.showPersons){
persons=(
  <div>
    {this.state.persons.map((person, index)=>{
      return <Person
      click = {()=>this.deletePersonHandler(index)}
      name= {person.name}
      age = {person.age}
      key = {person.id}
      changed ={(event)=>this.nameChangeHandler(event,person.id)}/>
  })}
</div>
);
  }
      return(
      <div className="App">
        <h1 className="title">Hi, I'm a React App</h1>
        <p>This is realy working!!</p>
        <button
        style={this.buttonStyle}
         onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <hr></hr>
        <input
          type ="text" 
          onChange={this.inputChangeHandler} 
          value={this.state.userInput}/>
          <p>{this.state.userInput.length}</p>
          <Validation inputLength = {this.state.userInput.length}></Validation>
          {charList}
      </div>
    );

      }
      
    }
    export default App;
