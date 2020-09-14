import React, {useState} from 'react';
import { Course } from '../interface';

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

        fetch("http://localhost:3000/course/",
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCourse),
        }).then(res => res.json()).then(savedNewCourse => { 
            if (savedNewCourse.id === undefined )
                {
                    alert("save error");
                }
            else{
                    if(props.onNewCourseCreate !== undefined) {
                        props.onNewCourseCreate(savedNewCourse);
                        alert("save successful");
                    }
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