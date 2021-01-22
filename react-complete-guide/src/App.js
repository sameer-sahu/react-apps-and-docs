import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Functional style with old JS
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello...</h1>
//       <Person />
//     </div>
//   );

  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'It is working...'));
// }

// Class style approach by extending the Component explicitly
class App extends Component {

  // Class Properties
  state = {
    persons: [
      { name: 'Sam', age: 28 },
      { name: 'Tani', age: 27 }
    ],
    msg: 'hiii....'
  }

  // By ES6, we can use this keyword which refers to the current class at Runtime
  switchNameHandler = (newName) => {
    console.log('Clicked...');

    // This will just merge the persons with new one
    // And no affect to other parts
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Tani', age: 28 }
      ],
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sam-Old", age: 28 },
        { name: event.target.value, age: 27 }
      ],
    });
  }

  render() {

    // Normal method variable
    // Two, if camelCase, no double coat
    const style = {
      "background-color": 'green',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    return(
      <div className="App">
      <h1>Hello...</h1>
      <h1>{this.state.msg}</h1>

      {/* Component is Reuseable */}
      {/* Can use any name, but recommended as 'state', bz of setState setter */}
      {/* <Person name = {this.state1.persons[0].name} age = {this.state1.persons[0].age}>Hobbies: Singing and Playing</Person> */}
      {/* <button onClick={this.switchNameHandler} >Switch Name</button> */}
      
      {/* But this way of binding is not recommended, use bind method */}
      <button 
        style={style}
        onClick={() => this.switchNameHandler('Sameerrr...')} >Switch Name</button>
      <Person 
        name = {this.state.persons[0].name} age = {this.state.persons[0].age}
        click = {this.switchNameHandler.bind(this, 'Sameer!!')}>Hobbies: Singing and Playing</Person>
      <Person 
        name = {this.state.persons[1].name} age = {this.state.persons[1].age} 
        changed={this.nameChangedHandler} />
    </div>
    );
  }
}

export default App;
