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

const switchNameHandler=()=>{ 
  setPersons({ persons:[
    {name:"Omer", age:"12"},
    {name:"Adi", age:"20"},
    {name:"Yael", age:"17"}
  ]})
}

      return(
      <div className="App">
        <h1 className="title">Hi, I'm a React App</h1>
        <p>This is realy working!!</p>
        <button className="btn-change-name" onClick={switchNameHandler}> Switch Name</button>
        <Person 
          name={personsState.persons[0].name}
           age={personsState.persons[0].age}
           > My Hobbis: Gymnastics</Person>
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={switchNameHandler}>My Hobbis: BasketBall</Person>
        <Person 
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
          >My Hobbis: BasketBall</Person>

      </div>
    )
      } 
export default App;

