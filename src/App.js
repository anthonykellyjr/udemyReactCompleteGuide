import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person'



class App extends Component {
  
  state = {
    persons: [
      { name: 'Anthony', age: 28, id: 1 },
      { name: 'Lisa', age: 26, id: 2 },
      { name : 'Max', age: 26, id: 3 }
    ],
    showPersons: false
  }

deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}


nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(
    p => {
      return p.id === id;
    }
  );

  const person = {
   ...this.state.persons[personIndex]
  };


  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;


  this.setState({
    persons: persons
  });
}

togglePersonsHandler = () => {
  const showThePersons = this.state.showPersons;
  this.setState({showPersons: !showThePersons})
}


  render() {
    
    
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){

        
        
        persons = (
          <div>
        
        {
        this.state.persons.map((person, index) => {
          return <Person 
          key={ person.id }
          name={ person.name } 
          age={ person.age }
          changed={ (event)=> this.nameChangedHandler(event, person.id) }
          click={ this.deletePersonHandler.bind(this, index) }
          />
        })}
 
        

       
    </div>
  )
    btnClass = classes.Red;
    }
    const assignedClasses = [];
    

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.Red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.Bold);
    }


    return (

      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>It's working</p>
        <button className={btnClass}
        onClick={this.togglePersonsHandler}>Show/Hide Users
        </button>
      {persons}
      </div>

    );
  }
}

export default App;
