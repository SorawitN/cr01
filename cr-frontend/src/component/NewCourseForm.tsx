import React, {useState} from 'react';
import { Course } from '../interface';
import CourseService from '../services/CourseService';

type NewCourseFrom = {
    onNewCourseCreate?: (newCourse: Course) => void,
};

const NewCourseForm = (props: NewCourseFrom) => {

    const [newCourseNumber, setNewCourseNumber] = useState<string>(' ');
    const [newCourseTitle, setNewCourseTitle] = useState<string>(' ');
  
    const handleNewCouseNumberChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewCourseNumber(e.target.value)
      }
    
      const handleNewCouseTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewCourseTitle(e.target.value)
      }
    
      const handleSave = () => {    
        //alert(`${newCourseNumber} -- ${newCourseTitle}`)
        const newCourse  = {
            number : newCourseNumber,
            title : newCourseTitle,
        };

        CourseService.createCourse(newCourse)
        .then(savedNewCourse => {
            if (savedNewCourse !== null )
                {
                   if(props.onNewCourseCreate !== undefined ){
                       props.onNewCourseCreate(savedNewCourse);
                       alert("sace successful");
                   }
                }
            else{
                    alert("save erros");
                }
        });
      };
    return (
        <div>
            Number: <input value={newCourseNumber} onChange={handleNewCouseNumberChange} /><br />
            Title: <input value={newCourseTitle} onChange={handleNewCouseTitleChange} /><br />
            <button onClick={handleSave}>Save</button>
        </div>
    )
};

export default NewCourseForm;