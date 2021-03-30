import React, {useState} from 'react';
import ReactDOM from 'react';
import './App.css';
import Person from './Person/Person'; 




const App = props =>{
  const [personsState, setPersons] =useState({
     persons:[
      {name:"Omer", age:"12"},
      {name:"Adi", age:"20"},
      {name:"Inbar", age:"17"}
    ]})
    console.log(personsState);
const showPersons = false;
const switchNameHandler=(newname)=>{ 
  setPersons({ persons:[
    {name:"Omer", age:"12"},
    {name:"Adi", age:"20"},
    {name:newname, age:"17"}
  ]})
}
const nameChangeHandler = (event)=>{
  setPersons({ persons:[
    {name:"Omer", age:"12"},
    {name:event.target.value, age:"20"},
    {name:"Inbar", age:"17"}
  ]})
  
}
const buttonStyle ={
  backgroundColor:"white",
  font:'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor:'pointer'
};


      return(
      <div className="App">
        <h1 className="title">Hi, I'm a React App</h1>
        <p>This is realy working!!</p>
        <button
        style={buttonStyle}
         onClick={()=>switchNameHandler("Yeal"),console.log("the button was clicked")}> Switch Name</button>
        {showPersons? <div>
        <Person 
          name={personsState.persons[0].name}
           age={personsState.persons[0].age}
           > My Hobbis: Gymnastics</Person>
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, "Adi")}
          changed={nameChangeHandler}>My Hobbis: BasketBall</Person>
        <Person 
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
          >My Hobbis: BasketBall</Person>
         
      
        </div> : null}
       


      </div>
    )
      } 
export default App;

