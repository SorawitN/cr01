import React from 'react';
import { useState } from 'react';

type App2Props = {
    message?: string;
};

const App2 = (props: App2Props) => {
    const [counter, setCounter] = useState<number>(0);

    const incCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            {props.message ? props.message : "nothing here"}
            <br/>
            Counter = {counter}
            <br/>
            <button onClick={incCounter}>incCounter</button>
        </div>
    );
};

/*
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
  } */

export default App2;