import React from 'react';
import { Course, Review } from '../interface';
import { useState } from 'react';
import CoursesService from '../services/CourseService';

type CourseItemProps = {
    course: Course,
};

const CourseItem = (props: CourseItemProps) => {
    const course: Course = props.course;

    const [reviewsVisible, setReviewVisible] = useState<boolean>(false);
    const [reviews, setReviews] = useState<Review[]>([]);

    const handleReviewVisibleToggle = () => {
        if (!reviewsVisible) {
            if (course.id){
                CoursesService.fetchReviews(course.id)
                .then(reviews =>{
                    setReviews(reviews);
                    setReviewVisible(true);
                })
            }else{

            }
        } else {
            setReviewVisible(!reviewsVisible);
        }
    }

    return (
    <li className="Course">
        {course.number} - {course.title} 
        &nbsp;
        <button onClick={handleReviewVisibleToggle}>
            {reviewsVisible ? 'hide review' : 'show reviews'}
        </button>
        {reviewsVisible && 
            (
            <ul>
                {reviews.map(review => (
                    <li>{review.comment} ({review.score})</li>
                ))}
                {reviews.length === 0 &&
                (
                    <li>
                        No Review
                    </li>
                ) 
                }
            </ul>   
            )
        }
    </li>
    );
};

export default CourseItem;