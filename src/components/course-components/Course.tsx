import type {CoursesType} from "../../modules/Modules.tsx";
import type {FC} from "react";

type CourseTypeProps = {
    course: CoursesType,
}
export const Course:FC<CourseTypeProps> = ({course}) => {
    return (
        <div>
            <h3>{course.title} {course.monthDuration} {course.hourDuration}</h3>
            <ul>
                {
                    course.modules.map((module,i)=><li key={i}>{module}</li>)
                }
            </ul>
        </div>
    );
};
