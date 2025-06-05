import {coursesAndDurationArray} from "../../arrays.ts";
import type {CourseModelType} from "../../models/CourseModel.tsx";
import {CourseComponent} from "../course-component/CourseComponent.tsx";


export const CoursesComponent = () => {
    return (
        <ul>{
            coursesAndDurationArray.map((course: CourseModelType, index: number) => {
                return <CourseComponent course={course} key={index}/>
            })
        }</ul>
    );
};
