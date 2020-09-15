import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Course } from '../interface';
import CourseItem from './CourseItem';
import NewCourseForm from '../component/NewCourseForm';


import CourseService from '../services/CourseService';
import { Redirect } from 'react-router-dom';

const CourseReview = () => {
  const [courses, setCourse] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const toggleFormVisible = () => {
    setFormVisible(!formVisible);
  }

  const fetchCourse = () => {
    CourseService.fetchCourse()
    .then(courses => {
      setCourse(courses);
    });
  };

  const handleNewCourseCreated = (course: Course) => {
    fetchCourse();
    setFormVisible(false);
  }

  useEffect(() => {
    fetchCourse();
  },[]);

  return (
    <div className="CourseReview">
      <ul>
        {courses.map(item => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
      <button onClick={toggleFormVisible}>New Course</button>
      {formVisible && 
        <div>
          <NewCourseForm onNewCourseCreate={handleNewCourseCreated}/>
        </div>
      }
    </div>
  );
} 

export default CourseReview;
