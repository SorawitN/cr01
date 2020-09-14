import { async } from "rxjs";
import { Course } from '../interface';
import { baseUrl } from '../config/constant';


async function fetchCourse():Promise<Course[]> {
    const res = await fetch(`${baseUrl}/Course/`);
    const courses = await res.json();
    return courses;
}

async function createCourse(newCourse: Course): Promise<Course|null> {
    const res = await fetch(`${baseUrl}/Course/`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCourse),
        });
        const savedNewCourse: Course = await res.json();
        if (savedNewCourse.id !== undefined ) 
        {
            return savedNewCourse;
        }
        else
        {
            return null;
        }
};

export default {
    fetchCourse,
    createCourse,
}