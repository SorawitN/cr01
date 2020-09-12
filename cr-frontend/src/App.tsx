import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

 
const App = () => {
  const [courses, setCourse] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/Course/')
      .then(res => res.json())
      .then(courses => {
        setCourse(courses);
      });
  },[]);

  return (
    <div className="App">
      <ul>
        {courses.map(item => (
          <li key={item.id}>{item.number} - {item.title}</li>
        ))}
      </ul>
    </div>
  );
} 

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

export default App;
