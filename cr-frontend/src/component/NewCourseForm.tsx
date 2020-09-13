import React, {useState} from 'react';

type NewCourseFrom = {
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
        alert(`${newCourseNumber} -- ${newCourseTitle}`)
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