import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

/* Hook method
const App = () => {
  const [message, setMessage] = useState('My message');

  useEffect(() => {
    fetch('http://localhost:3000/frozen/')
      .then(res => res.json())
      .then(obj => {
        setMessage(obj.message);
      });
  },[]);

  return (
    <div className="App">
      {message}
    </div>
  );
} */

/* Class component method
type AppState = {
  message: string;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    message: 'Default message',
  };

  componentDidMount(){
    fetch('http://localhost:3000/frozen/')
    .then(res => res.json())
    .then(obj => {
      this.setState({message: obj.message});
    });
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}  */

type AppProps = {
  // using `interface` is also ok
  message?: string;
};
type AppState = {
  counter: number; // like this
};
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    counter: 0
  }

  incCounter = () => {
    this.setState({counter: this.state.counter + 1})
  };

  render() {
    return (
      <div>
        {this.props.message ? this.props.message : "nothing here"} 
        <br/>
        Counter = {this.state.counter}
        <br/>
        <button onClick={this.incCounter}>Increment</button>
      </div>
    );
  }
}

export default App;
