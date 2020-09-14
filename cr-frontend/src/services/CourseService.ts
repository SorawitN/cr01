import { async } from "rxjs";
import { Course , Review} from '../interface';
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

async function fetchReviews(courseID: string): Promise<Review[]> {
    const res = await fetch(`${baseUrl}/Course/${courseID}/reviews`);
    const reviews = await res.json();
    return reviews;
}

export default {
    fetchCourse,
    createCourse,
    fetchReviews,
}