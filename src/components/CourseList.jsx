import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from "../context/courses_context";
const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <CourselistWrapper>
      <div className="container">
        <div className="courses-list-top">
          <h2>A broad selection of courses </h2>
          <p>Yazılım alanında kendinizi geliştirin.</p>
        </div>
        <Tabs courses={courses} />
      </div>
    </CourselistWrapper>
  );
};
const CourselistWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;
export default CourseList;
