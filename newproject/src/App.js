import React from 'react';
import ReactDOM from 'react';


 const Person = (props) => {
  return (
  <div className="person">
       <h1>{props.name}</h1>
       <p>your Age:{props.age}</p>
  </div>
  );
}

const app = () => {return (
  <div>
      <Person name="adi" age="20"/>
      <Person name="ron" age="20"/>
      <Person name="yael" age="49"/>

  </div>
);}
export default app; 

