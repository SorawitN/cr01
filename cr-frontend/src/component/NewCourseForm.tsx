import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// type
import { Course } from '../interface';

// Service
import CourseService from '../services/CourseService';

type NewCourseFrom = {
    onNewCourseCreate?: (newCourse: Course) => void,
};

const NewCourseForm = (props: NewCourseFrom) => {

    return (
        <div>
            <Formik
                initialValues={{ newCourseNumber:'', newCourseTitle:''}}
                validate = { value => {
                    const errors: any = {};

                    if (value.newCourseTitle === ''){
                        errors.newCourseTitle = 'Course title is required.';
                    }
                    if (value.newCourseNumber === ''){
                        errors.newCourseNumber = 'Course number is required.';

                    } else if(!/^[0-9]+$/.test(value.newCourseNumber)){
                        errors.newCourseNumber = 'Course number format error';
                    }
                    return errors;
                }}

                onSubmit={(value, actions) => {
                    const newCourse  = {
                        number : value.newCourseNumber,
                        title : value.newCourseTitle,
                    };
            
                    CourseService.createCourse(newCourse)
                    .then(savedNewCourse => {
                        if (savedNewCourse !== null )
                            {
                               if(props.onNewCourseCreate !== undefined ){
                                   props.onNewCourseCreate(savedNewCourse);
                                   alert("save successful");
                               }
                            }
                        else{
                                alert("save erros");
                            }
                            actions.setSubmitting(false);
                    });
                }}
            >
             {({isSubmitting}) => (
                 <Form>
                     Number: <Field type="input" name="newCourseNumber" />
                     <ErrorMessage name="newCourseNumber" component="div" />
                     <br />
                     Title: <Field type="input" name="newCourseTitle" />
                     <ErrorMessage name="newCourseTitle" component="div" />
                     <br />
                     <button disabled={isSubmitting}>save</button>
                 </Form>
             )}            
            </Formik>
        </div>
    )
};

export default NewCourseForm;