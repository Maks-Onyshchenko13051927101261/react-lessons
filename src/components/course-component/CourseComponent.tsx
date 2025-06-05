import "./CourseStyles.css"
import type {FC} from "react";
import type {CourseModelType} from "../../models/CourseModel.tsx";

type PropsType = {
    course: CourseModelType
}

export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <li>{course.title} {course.monthDuration}</li>
    );
};
