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

    const [newReviewComment, setNewReviewComment] = useState<string>(' ');
    const [newReviewScore, setNewReviewScore] = useState<number>(1);

    const clearNewReviewForm = () => {
        setNewReviewComment(' ');
        setNewReviewScore(1);
    };

    const handleNewReviewSaveCli = () => {
        const newReview: Review = {
            comment: newReviewComment,
            score: newReviewScore,
        };
        if(course.id){
            CoursesService.createReview(newReview, course.id)
            .then(saveNewReview => {
            if (saveNewReview){
                fetchReviews();
                clearNewReviewForm();
            }
        })
        }
    }

    const fetchReviews = () => {
        if(course.id){
            CoursesService.fetchReviews(course.id)
                .then(reviews =>{
                    setReviews(reviews);
                    setReviewVisible(true);
                })
        }
    }


    const handleReviewVisibleToggle = () => {
        if (!reviewsVisible) {
           fetchReviews();
           setReviewVisible(true);
        } else {
            setReviewVisible(false);
        }
    }

    const newReviewScoreOption = [1,2,3,4,5];

    return (
    <li className="Course">
        {course.number} - {course.title} 
        &nbsp;
        <button onClick={handleReviewVisibleToggle}>
            {reviewsVisible ? 'hide review' : 'show reviews'}
        </button>
        {reviewsVisible && 
            (
            <div>
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
                <b>New review</b><br/>
                Comment: &nbsp;
                <input 
                    onChange = {(e) => {setNewReviewComment(e.target.value);}}
                    value={newReviewComment}
                /> &nbsp;
                Score: &nbsp;
                <select 
                    onChange = {(e) => {setNewReviewScore(parseInt(e.target.value))}}
                    value={newReviewScore}
                >
                    {newReviewScoreOption.map(item => (
                        <option value={item}>{item}</option>
                    ))}
                </select> &nbsp;
                <button
                    onClick={handleNewReviewSaveCli}
                >save</button>
            </div>   
            )
        }
    </li>
    );
};

export default CourseItem;