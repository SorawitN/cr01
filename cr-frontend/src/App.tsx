import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import { Course } from './interface';
import CourseItem from './CourseItem';

const App = () => {
  const [courses, setCourse] = useState<Course[]>([]);

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
          <CourseItem key={item.id} course={item} />
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
