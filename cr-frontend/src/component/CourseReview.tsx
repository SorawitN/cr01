import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Component
import { Course } from '../interface';
import CourseItem from './CourseItem';
import NewCourseForm from '../component/NewCourseForm';

// Service
import CourseService from '../services/CourseService';
import { Redirect } from 'react-router-dom';

// Function Component ( Hook Method )
const CourseReview = () => {

  // สร้าง [ state, setState ] จาก useState type Course[]

  // สร้างที่เก็บรายวิชา
  const [courses, setCourse] = useState<Course[]>([]);
  // สร้างสถานะของ form
  const [formVisible, setFormVisible] = useState<boolean>(false);

  // function แปลง state ของ form เปิด/ปิด
  const toggleFormVisible = () => {
    setFormVisible(!formVisible);
  }

  // function ดึงค่าจาก backend มา set ให้ course
  const fetchCourse = () => {
    CourseService.fetchCourse()
    .then(courses => {
      setCourse(courses);
    });
  };

  // function เรียกใช้งาน fetchCourse() และปิด form
  const handleNewCourseCreated = (course: Course) => {
    fetchCourse();
    setFormVisible(false);
  }

  
  useEffect(() => {
    fetchCourse();
  },[]);

  // ตัวของ Component
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
