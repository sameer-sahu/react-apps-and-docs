import React, {Component} from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    username: "user"
  }

  onClickHandler = () => {
    this.setState({
      username: "new-user"
    });
  }

  onChangeInInput = (event) => {
    this.setState({
      username: event.target.value
    });
  }
  
  render() {

    const style = {
      "background-color": 'green',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <button style={style} onClick={this.onClickHandler}>Click</button>
        <UserInput changed={this.onChangeInInput} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="user2" />
      </div>
    );
  };
}

export default App;
