import { Course , Review} from '../interface';
import { baseUrl } from '../config/constant';


// รับค่า course : Course[]  ( array ของ course ) จาก backend
async function fetchCourse():Promise<Course[]> {
    const res = await fetch(`${baseUrl}/Course/`);
    const courses = await res.json();
    return courses;
}


// สร้าง API ส่งคำร้องให้สร้าง Course ที่ Backend
async function createCourse(newCourse: Course): Promise<Course|null> {

    // เชื่อมไปที่ ${baseUrl}/Course
    // ให้ res เป็นตัวรับคำตอบ
    const res = await fetch(`${baseUrl}/Course/`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCourse),
        });

        // รับคำตอบจาก res 
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


// สร้าง API ส่งคำร้องให้สร้าง Review ที่ Backend
async function createReview(newReview: Review,courseID: string): Promise<Review|null> {
    const res = await fetch(`${baseUrl}/Course/${courseID}/reviews`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview),
        });
        const savedNewReview: Review = await res.json();
        if (savedNewReview.id !== undefined ) 
        {
            return savedNewReview;
        }
        else
        {
            return null;
        }
};

// รับค่า review : Review[]  ( array ของ review ) จาก backend
async function fetchReviews(courseID: string): Promise<Review[]> {
    const res = await fetch(`${baseUrl}/Course/${courseID}/reviews`);
    const reviews = await res.json();
    return reviews;
}

export default {
    fetchCourse,
    createCourse,
    fetchReviews,
    createReview,
}