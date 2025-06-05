import {coursesArray} from "../../arrays.ts";
import type {CoursesType} from "../../modules/Modules.tsx";
import {Course} from "../course-components/Course.tsx";
import "./CoursesStyles.css"

export const Courses = () => {
    return (
        <div>
            {
                coursesArray.map((value:CoursesType,index:number) => (
                    <Course key={index} course={value}/>
                ))
            }
        </div>
    );
};
