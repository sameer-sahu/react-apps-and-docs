import React from 'react'; // Need React to convert the JSX into HTML equivalent

// Bz of Webpack Build Tool we can import CSS to JS file
import './Person.css';

// Functional style with ES6, recommended
// const, bz it shouldn't be chnaged like variable
const person = (props) => {
    // Only single dynamic statement we can pass using this
    // return <p>I am a Person and {Math.floor(Math.random() * 30)} years old.</p>
    // return <p>I am {props.name} and {props.age} years old.</p>

    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            {/* using two way data binding by passing value  */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );

}

// For only one statement
// const person = () => <p>I am a person.</p>

export default person;