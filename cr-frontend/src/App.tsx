import React from 'react';

import CourseReview from './component/CourseReview';
import LoginForm from './component/LoginForm';
import About from './component/About';



const App = () => {
  return (
    <div className="App">
      <CourseReview />
      <LoginForm />
      <About />
    </div>
  );
} 

export default App;
